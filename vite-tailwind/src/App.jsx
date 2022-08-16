import { useEffect, useState } from 'react'
import api from '../src/services/axios'
import  Card  from './components/Card'


function App() {
    const [count, setCount] = useState(0)
    const [barraLateral, setBarraLateral] = useState(0)
    
    const scroll = ()=>{
      console.log("func SCROLL")
      setBarraLateral(window.scrollY)
    }
    useEffect(()=>{
      window.addEventListener('scroll', scroll)
      console.log("Effect[]")
    },[])

    const scrollToTop = ()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
        
    return (

      <>
          <Card/>
          <div>
                <p>parágrafo</p> 
                <button  className="p-2 bg-orange-700 hover:bg-orange-600" >Contador: {count}
                </button> 
                {barraLateral >= 400 && 
                (
                <div onClick={()=> scrollToTop()} className="fixed cursor-pointer top-96 right-8 border-2 border-red-600 p-4 rounded-full hover:bg-red-300 hover:text-black" >Willy</div>  
                )}

          </div>
      </>
      
         
        
        
    )
  }
  
  export default App
    
      

    

    

     

  


