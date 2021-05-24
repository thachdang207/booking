/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../Global/Footer';
import {useRouteMatch, Switch, Route} from 'react-router-dom'
import EditRoom from './pages/EditRoom'
import BookingManagement from './pages/BookingManagement'
import RoomManagement from './pages/RoomManagement'
import HomeAdmin from './pages/HomeAdmin'
import Nav from './components/Layouts/Nav'
import UpdateLocation from "./pages/UpdateLocation";


function Admin() {
    const match = useRouteMatch();
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
                <Nav/>
                <main className="bg-gray-100 bg-opacity-100 min-h-screen ">
                    <div className="max-w-full mx-auto py-6 sm:px-6 md:px-12 lg:px-16 xl:px-20 min-h-screen">
                        <div className="py-5 sm:px-0.5 min-h-screen">
                            <div className="box-border py-3 border-4 bg-white rounded-md min-h-screen">
                                <Switch>
                                    <Route exact path={`${match.url}`} component={HomeAdmin}/>
                                    <Route path={`${match.url}/room/`} exact component={RoomManagement}/>
                                    <Route path={`${match.url}/update-location/`} exact component={UpdateLocation}/>
                                    <Route path={`${match.url}/room/:id`} exact component={EditRoom}/>
                                    <Route path={`${match.url}/booking`} exact component={BookingManagement}/>
                                    <Route exact component={Error}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    );
}

export default Admin;
