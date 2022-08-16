import api from '../src/services/axios'
import { useState, useEffect } from 'react'



function App() {

  const [alunos, setAlunos] = useState([])
  useEffect( ()=>{

   
      const getAlunos = async () => {
        await api.get('/alunos')
        .then((response)=>{
          console.log(response.data)
          setAlunos(response.data)
        })
        .catch((erro)=>{
          console.log(erro)
        })
        
        console.log("--------------")
    }
    getAlunos()

    },[])
        
        
    return (
      <div>
        <h1 className="border-2 border-b-blue-700 pb-4">Lista de alunos</h1>
        <ul>
          {alunos.map((aluno)=>(
              <li key={aluno.nome}>
                Nome: {aluno.nome} -- idade: {aluno.idade}
              </li>
            ))
          }
        </ul>
        
        
      </div>
    )
  }
  
  export default App
    
      

    

    

     

  


