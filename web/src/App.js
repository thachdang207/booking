import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'

import './assets/styles/App.css'

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
