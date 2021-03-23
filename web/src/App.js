import React, { Suspense } from 'react'
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Loading from './Components/Admin/Loading/Loading';

const Layouts = React.lazy(() => import('./Components/Admin/Layouts/Layouts'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
        <Switch>
            {/* PUBLIC */}
            <Route  path="/admin" component={Layouts} />
            <Route  path="/" component={Home} />
            <Route  path="/Login" component={Login} />
        </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
