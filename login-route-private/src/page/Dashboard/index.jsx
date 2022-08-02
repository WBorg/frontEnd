import React, {useContext} from "react";
import { Context } from '../../Context/AuthContext'
import { Link } from 'react-router-dom'

export const Dashboard = () =>{

  const token = localStorage.getItem("token");
  const { authenticated,handleLogout}  = useContext(Context)

  console.log(`Situação do usuário na página Login: ${authenticated}`)


  return(
    <div>
        
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/usuarios">Usuários</Link>
          </li>
          <li>
            <Link to="/usuarios/novo">Novo Usuário</Link>
          </li>
          
            
        </ul>

      <h1>Dashboard</h1>
      {/* <h3>Token: {token}</h3> */}
      <button type="button" onClick={handleLogout}>Sair</button>

    </div>
  )
}