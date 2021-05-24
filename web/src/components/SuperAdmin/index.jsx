/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import Footer from '../Global/Footer';
import {useRouteMatch, Switch, Route, Link, useHistory} from 'react-router-dom'
import SuperAdminLogin from "./pages/Login";
import CreateOwner from "./pages/CreateOwner"
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import HomeSuperAdmin from "./pages/HomeSuperAdmin";
import CreateOwnerForLocation from "./pages/CreateOwner/CreateOwnerForLocation";
import {useSelector} from "react-redux";

function SuperAdmin() {
    const match = useRouteMatch();
    const state = useSelector((state) => state);
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
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-2 min-h-screen">
                        <div className="px-4 py-6 sm:px-0 min-h-screen">
                            <div className="box-border p-4 border-4 bg-white rounded-md min-h-screen">
                                <div className="container my-12 mx-auto px-4 md:px-12">
                                    <Breadcrumb>
                                        <BreadcrumbItem>
                                            <Link to={`${match.url}`}>
                                                Home
                                            </Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem>
                                            <Link to={`${match.url}/create-owner`}>
                                                Create new owner
                                            </Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem>
                                            <Link to="/logout">
                                                Logout
                                            </Link>
                                        </BreadcrumbItem>
                                    </Breadcrumb>
                                    <Switch>
                                        <Route exact from={`${match.url}`} component={HomeSuperAdmin}/>
                                        <Route exact path={`${match.url}/login`} component={SuperAdminLogin}/>
                                        <Route exact path={`${match.url}/create-owner`} component={CreateOwner}/>
                                        <Route exact path={`${match.url}/create-owner/:id`}
                                               component={CreateOwnerForLocation}/>
                                        <Route exact component={Error}/>
                                    </Switch>
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
