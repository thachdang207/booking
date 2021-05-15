import React, {Suspense, useEffect} from 'react'
import {ProtectedRoute} from './ProtectedRoute'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Loading} from './components/Global/Loading'
import RedirectPage from "./components/Global/RedirectPage";
import Unauthorized from './components/Global/Unauthorizated'

import Hotel from './components/Hotel'
import Room from './components/Room'
import City from './components/City'

import AOS from "aos";
import "aos/dist/aos.css";
import './assets/styles/App.css'

const Admin = React.lazy(() => import(`./components/Admin`));
const User = React.lazy(() => import(`./components/User/UserProfile`));
const SuperAdmin = React.lazy(() => import(`./components/SuperAdmin`));
const Login = React.lazy(() => import(`./components/Login`));
const Home = React.lazy(() => import(`./components/Home`));
const Logout = React.lazy(() => import(`./components/Logout`));


function App() {

    useEffect(() =>
        AOS.init({
            duration: 500,
            easing: "ease-in-sine",
        }), [])
    return (
        <div className="App">
            <Suspense fallback={<Loading/>}>
                <BrowserRouter>
                    <Switch>
                        {/* PUBLIC */}
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/logout" component={Logout}/>
                        <Route exact path="/hotel/:id" component={Hotel}/>
                        <Route exact path="/room/:id" component={Room}/>
                        <Route exact path="/city/:id" component={City}/>

                        {/* USER */}

                        <ProtectedRoute
                            path="/user"
                            component={User}
                        />

                        {/* ADMIN */}

                        <ProtectedRoute
                            path='/admin'
                            component={Admin}
                        />

                        {/* SUPER - ADMIN */}
                        <Route
                            path='/super-admin'
                            component={SuperAdmin}
                        />

                        <Route exact path="/404" component={RedirectPage}/>
                        <Route exact path="/401" component={Unauthorized}/>
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
