import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import Login from './Components/Login/Login'
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            {/* PUBLIC */}
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
