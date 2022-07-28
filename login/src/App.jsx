import {Login} from './components/Login/Login';
import { Dashboard } from './page/Dashboard';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { PrivateRoute } from './routes/privateroutes'



function App() {

  return (
    <div >
      <Router>
        <Switch>
          
          <Route exact path="/" component={Login}/>
          <PrivateRoute  path="/dashboard" component={Dashboard} />

        </Switch>
      </Router>

    </div>
  )
}

export default App
