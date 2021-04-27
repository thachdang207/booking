/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import Footer from '../Global/Footer';
import {useRouteMatch, useHistory, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateLocation from './pages/CreateLocation'
import SuperAdminLogin from "./pages/Login";
import Locations from "./pages/Locations"

import {useSelector} from "react-redux";

function SuperAdmin() {
    const state = useSelector((state) => state);
    const match = useRouteMatch();

    const history = useHistory();
    useEffect(() => {
        !state.sAdmin.isAuthenticated
        && history.push(`${match.url}/login`);
    }, [state.sAdmin.isAuthenticated]); // eslint-disable-line
    const Error = () => {
        return (
            <h1>
                Page is not found
            </h1>
        )
    }
    return (
        <div className="h-full min-h-screen flex flex-col md:flex-col justify-between">
            <div>
                <main className="bg-gray-100 bg-opacity-100 min-h-screen ">
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 min-h-screen">
                        <div className="px-4 py-6 sm:px-0 min-h-screen">
                            <div className="box-border p-4 border-4 bg-white rounded-md min-h-screen">
                                <div className="container my-12 mx-auto px-4 md:px-12">
                                    <div className="flex flex-wrap -mx-1 md:w-full lg:w-full">
                                        <Switch>
                                            <Route exact path={`${match.url}`} component={Home}/>
                                            <Route exact path={`${match.url}/login`} component={SuperAdminLogin}/>
                                            <Route exact path={`${match.url}/create-location/`}
                                                   component={CreateLocation}/>
                                            <Route exact path={`${match.url}/locations/`} component={Locations}/>
                                            <Route exact component={Error}/>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    );
}

export default SuperAdmin;
