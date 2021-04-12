import React from 'react'
import Footer from '../../components/Footer';
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import HomeAdmin from '../Admin/pages/HomeAdmin'
import EditRoom from '../Admin/pages/EditRoom'
import BookingManagement from '../Admin/pages/BookingManagement'
import RoomManagement from '../Admin/pages/RoomManagement'
import Nav from './components/Layouts/Nav'


function Admin() {
    const match = useRouteMatch();
    console.log({ match });
    return (
        <div className="h-full min-h-screen flex flex-col md:flex-col justify-between">
            <div>
                <Nav />
                <main className="bg-gray-100 bg-opacity-100 min-h-screen ">
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 min-h-screen">
                        <div className="px-4 py-6 sm:px-0 min-h-screen">
                            <div className="box-border p-4 border-4 bg-white rounded-md min-h-screen">
                                <div className="container my-12 mx-auto px-4 md:px-12">
                                    <div className="flex flex-wrap -mx-1 md:w-full lg:w-full">
                                        <Switch>
                                            <Route exact path={`${match.url}`} component={HomeAdmin} />
                                            <Route exact path={`${match.url}/room`} component={RoomManagement} />
                                            <Route exact path={`${match.url}/room/:roomId`} component={EditRoom} />
                                            <Route excat path={`${match.url}/booking`} component={BookingManagement} />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Admin;