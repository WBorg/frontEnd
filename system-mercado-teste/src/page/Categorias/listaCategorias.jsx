import React, {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import api from '../../services/api';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Table from 'react-bootstrap/Table';
import css from './listaCategorias.module.css';









export function ListaCategorias(){

  const history = useHistory()
  const [data, setData] = useState([]);
  const [busca, setBusca] = useState([]);
  const [status, setStatus] = useState({
    type:'',
    mensagem: ''
  });

  const getCategories = async () =>{
    const headers = {
      'headers': {
        'Authorization' : 'Bearer ' +  localStorage.getItem('token')
      }
    }
    await api.get("/categories/all", headers)
    .then((response)=>{
        setData(response.data.categories)
    }).catch((error)=>{
      if(error.response){
        setStatus({
          type:'error',
          mensagem: error.response.data.mensagem
        })
      }else{
          setStatus({
            type:'error',
            mensagem: 'Erro: tente mais tarde'
          })
      }
    })
  }

  useEffect(()=>{
    getCategories()
    
  },[])

 

  async function handleDelete (id){
    const headers = {
      'headers': {
        'Authorization' : 'Bearer ' +  localStorage.getItem('token')
      }
    }
     await api.delete("/categories/delete/"+id, headers)
     .then((response)=>{
      setStatus({
        type: 'success',
        mensagem: response.data.mensagem
      })
      console.log(status.mensagem)
      // return history.push("/usuarios")

    }).catch((err)=>{
      if(err.response){
        setStatus({
        type: 'erro',
        mensagem: err.response.data.mensagem
      })
      }else{
        setStatus({
          type: 'erro',
          mensagem: "Erro: Tente mais tarde"
        })
      }
      
      
    })
    getCategories()

      
  } 

  function confirmDelete(categorie){
    confirmAlert({
      title: 'Atenção!',
      message: `Tem certeza que deseja excluir a categoria ${categorie.name}?`,
      buttons: [
        {
          label: 'Sim',
          onClick: ()=> handleDelete(categorie.id)
        },
        {
          label: 'No'
          
        }
      ],
      closeOnClickOutside: false
    });
    
  };



  return(
    <>
      <NavBar/>
      <div className={css.header}>
        <h1>Lista de Categorias</h1>
        <input type="text" onChange={ e => setBusca(e.target.value) } />
        <Button variant="outline-success">
            <Link className={css.linkNavBar} to="/categorias/novo">Nova Categoria</Link>
        </Button>
      </div>
      <div className={css.table}>
        <Table striped bordered  size="sm">
            <thead>
                    <tr>
                      <th>#</th>
                      <th>Nome</th>
                      <th>Descrição</th>
                    </tr>
            </thead>
            <tbody>
            {data.map(categorie => (
                <tr key={categorie.id}>
                  <td>{categorie.id}</td>
                  <td>{categorie.name}</td>
                  <td>{categorie.description}</td>
                  <td className={css.buttons}>
                    <Button variant="outline-warning" >
                        <Link className={css.linkNavBar} to={"/categorias/editar/"+categorie.id}>Editar</Link>
                    </Button>
                    <Button variant="outline-danger" onClick={() => confirmDelete(categorie)}>
                        Excluir
                    </Button>
                  </td>
                </tr>
                    )
                  )}
            </tbody>
        </Table>
      </div>


    </>
  )
}