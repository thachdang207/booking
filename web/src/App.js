import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Layouts from './Components/Admin/Layouts/Layouts';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            {/* PUBLIC */}
            <Route exact path="/admin" component={Layouts} />
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
