import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import '../NavBar/listaUsuarios.css'


function NavBar() {
  

  
  
  return ( 
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#"><Link className="linkNavBar" to="/dashboard">Dashboard</Link></Nav.Link>
          <Nav.Link href="#"><Link className="linkNavBar" to="/usuarios">Usuários</Link></Nav.Link>
          <Nav.Link href="#"><Link className="linkNavBar" to="/usuarios/novo">Novo Usuário</Link></Nav.Link>
        </Nav>
    </Navbar>
   );
}

export default NavBar;