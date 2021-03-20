import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'

const Layouts = React.lazy(() => import('./Components/Admin/Layouts/Layouts'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
        <Switch>
            {/* PUBLIC */}
            <Route exact path="/admin" component={Layouts} />
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
        </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
