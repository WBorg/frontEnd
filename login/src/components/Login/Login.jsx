import React, {useState} from 'react';
import Container from 'react-bootstrap/container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.css';
import api from '../../services/api';

export function Login(){

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const valorInput = e => setUser({
    ...user,
    [e.target.name] : e.target.value
  })

  const loginSubmit = async e => {
    e.preventDefault();
    // console.log(user.email);
    // console.log(user.password);
    const headers = {
      'Content-Type': 'application/json'
    }
    await api.post("/login", user, {headers})
    .then((response)=>{
      console.log(response)
    }).catch((err)=>{
      
    })

  }

  return(
    <>
      <Container className="box">
          <Form onSubmit={loginSubmit} className="borderForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={valorInput} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={valorInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </Container>
    </>
  )
}
