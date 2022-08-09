import React, {useContext} from "react";
import { Context } from '../../Context/AuthContext'
import NavBar from "../../components/NavBar/NavBar";


export const Dashboard = () =>{

  const token = localStorage.getItem("token");
  const { authenticated,handleLogout}  = useContext(Context)

  console.log(`Situação do usuário na página Login: ${authenticated}`)


  return(
    <div>
      <NavBar/>
      <h1>Dashboard</h1>
      <button type="button" onClick={handleLogout}>Sair</button>
    </div>
  )
}
        

