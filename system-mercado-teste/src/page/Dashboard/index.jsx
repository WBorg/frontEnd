import React, {useContext, useState, useRef} from "react";
import { Context } from '../../Context/AuthContext'
import NavBar from "../../components/NavBar/NavBar";
import  css from  './dashboard.module.css';
// import { Dashboard } from './../../../../system-mercado/src/page/Dashboard/index';


export const Dashboard = () =>{

  const token = localStorage.getItem("token");
  const { authenticated,handleLogout}  = useContext(Context)

  console.log(`Situação do usuário na página Login: ${authenticated}`)
  /**************************************** */
  const [classe, setClasse] = useState(false)
  const addClass = () =>{
    if(classe == false){
      setClasse(true)
    } 
    else{
      setClasse(false)
      

    }
  }
/************************************************* */

  return(
    <div>
      <NavBar/>
      <h1 onClick={addClass} className={classe ? `${css.center}` : ''} h1>{`Classe: ${classe}`} </h1>
      <button type="button" onClick={handleLogout}>Sair</button>
    </div>
  )
}
        

