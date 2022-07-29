import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import history from './services/history'
import { AuthProvider} from './Context/AuthContext'
import Routes from './routes/privatesroutes'


function App() {

  return (
    <div >

        <AuthProvider>
          <Router history={history}>
            <Routes />
          </Router>
        </AuthProvider>
          
        
          
         

        

    </div>
  )
}

export default App
