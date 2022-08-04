import React, {useState, useEffect} from 'react'
import api from '../../services/api';
import Table from 'react-bootstrap/Table'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'



export const ListaUsuarios = () =>{


  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
    type:'',
    mensagem: ''
  });

  const getUsers = async () =>{
    const headers = {
      'headers': {
        'Authorization' : 'Bearer ' +  localStorage.getItem('token')
      }
    }
    await api.get("/users", headers)
    .then((response)=>{
        setData(response.data.users)
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
    getUsers()
  },[])

  return(
    <>
      
        {/* <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/usuarios">Usuários</Link>
          </li>
          <li>
            <Link to="/usuarios/novo">Novo Usuário</Link>
          </li>
          
            
        </ul> */}
        {/* <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#"><Link className="linkNavBar" to="/dashboard">Dashboard</Link></Nav.Link>
              <Nav.Link href="#"><Link className="linkNavBar" to="/usuarios">Usuários</Link></Nav.Link>
              <Nav.Link href="#"><Link className="linkNavBar" to="/usuarios/novo">Novo Usuário</Link></Nav.Link>
            </Nav>
        </Navbar> */}
        <NavBar/>

      <h1>Lista Usuários</h1>
      <Table striped bordered variant="dark" size="sm" >
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>

                  {data.map(user => (
                    
                    // <div key={user.id}>
                    //     <div>{user.name}</div>
                    //     <div>{user.email}</div>
                    // </div>
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                              <Button variant="outline-warning" >
                                  <Link to={"/usuarios/editar/"+user.id}>Editar</Link>
                              </Button>
                              <Button variant="outline-danger" onClick={() => handleDelete(user.id)}>
                                  Excluir
                              </Button>
                            </td>
                          </tr>
                  )
                )}
            </tbody>
      </Table>
              
        
        
            
             
            
        




    </>

  )
}
 