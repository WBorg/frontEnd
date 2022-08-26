import React, { useState , useEffect } from "react"
import api from '../../services/api'
import { Link , useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import {Eye, EyeSlash} from 'phosphor-react';
import '../../components/Login/styles.css';






const initialValue = {
  name: '',
  email: ''
}

export const UsuariosFormView = () =>{

  
  
  
  const history = useHistory()
  const [values, setValues] = useState(initialValue)
  const [status, setStatus] = useState({
    type: '',
    mensagem: '',
    loading: false
    
  })

  const [image, setImage] = useState("")
  const [endImage, setEndImage] = useState("")

  const [pass, setPass] = useState('password')
  
  /*funcao para alternar visualizacao da senha*/
  const changeIcon = ()=>{
    {pass == 'password' ? setPass('text') : setPass('password')}
  }


  useEffect(()=>{
    const getUsers = async () =>{
      const headers = {
        'headers': {
          'Authorization' : 'Bearer ' +  localStorage.getItem('token'),
          'Content-Type' : 'application/json'
        }
      }
      await api.get("/users/view-profile/" + localStorage.getItem('user'), headers)
      .then((response)=>{
          if(response.data.users){
            setValues(response.data.users)
            setEndImage(response.data.endImagem)
          }else{
            setStatus({
              type: 'warning',
              mensagem: 'Usuário não encontrado'
            })
          }
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
  
    
   getUsers()

  }, [])

  const formSubmit = async e =>{
    e.preventDefault()
    setStatus({loading: true})

    const headers = {
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }

    
      await api.post("/users/create", values, headers)
      .then((response) =>{
          console.log(response)
          setStatus({
            type: 'success',
            mensagem: response.data.mensagem,
            loading: false
          })
          return history.push("/usuarios")
      }).catch((err)=>{
          if(err.response){
            setStatus({
              type: 'error',
              mensagem: err.response.data.mensagem,
              loading: false
            })
        }else{
          setStatus({
            type: 'error',
            mensagem: 'Erro: tente mais tarde',
            loading: false
          })
        }}
      )
      
    
      await api.put("/users/update", values, headers)
    .then((response) =>{
        console.log(response)
        setStatus({
          type: 'success',
          mensagem: response.data.mensagem,
          loading: false
        })
        return history.push("/usuarios")
    }).catch((err)=>{
      if(err.response){
        setStatus({
          type: 'error',
          mensagem: err.response.data.mensagem,
          loading: false
        })
      }else{
        setStatus({
          type: 'error',
          mensagem: 'Erro: tente mais tarde',
          loading: false
        })
      }

    })

    

  }

    
  



  return(
    <div>

    <Container>
      <h1>{acao} Usuário</h1>
      <Form onSubmit={formSubmit} className="borderForm">
          {status.type == 'error' ? <Alert size="big" variant="danger"><p>{status.mensagem}</p></Alert> : ""} 
          {status.type == 'success' ? <Alert variant="success"><p>{status.mensagem}</p> </Alert> : ""}
          {status.loading ? <p>Validando...</p> : ""}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" name="name" value={values.name} placeholder="digite seu nome" onChange={valorInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control type="email" name="email" value={values.email} placeholder="Digite seu e-mail" onChange={valorInput} />
          </Form.Group>
          
          {status.loading 
          ? <Button variant="primary" type="submit" disabled>Enviando... </Button>
          : <Button variant="primary" type="submit">Enviar </Button> 
          }
            
         
        </Form>
      </Container>

    </div>
  )
}