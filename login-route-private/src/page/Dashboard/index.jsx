import React, {useContext} from "react";
import { Context } from '../../Context/AuthContext'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Dashboard = () =>{

  const token = localStorage.getItem("token");
  const { authenticated,handleLogout}  = useContext(Context)

  console.log(`Situação do usuário na página Login: ${authenticated}`)


  return(
    <div>
        
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
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#"><Link className="linkNavBar" to="/dashboard">Dashboard</Link></Nav.Link>
              <Nav.Link href="#"><Link className="linkNavBar" to="/usuarios">Usuários</Link></Nav.Link>
              <Nav.Link href="#"><Link className="linkNavBar" to="/usuarios/novo">Novo Usuário</Link></Nav.Link>
            </Nav>
        </Navbar>


      <h1>Dashboard</h1>
      {/* <h3>Token: {token}</h3> */}
      <button type="button" onClick={handleLogout}>Sair</button>

    </div>
  )
}