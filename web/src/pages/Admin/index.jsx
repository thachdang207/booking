import React, {Suspense} from 'react'
import Footer from '../../components/Footer';
import Header from '../Admin/components/Layouts/Header';
import Nav from '../Admin/components/Layouts/Nav';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'
import {Loading} from '../../components/Loading';

const Home = React.lazy(() => import('../Admin/pages/HomeAdmin'));
const EditRoom = React.lazy(() => import('./pages/EditRoom'));
const BookingManagement = React.lazy(() => import('../Admin/pages/BookingManagement'));

function Layouts() {
    const match = useRouteMatch();
    return (
        <div className="h-full min-h-screen flex flex-col md:flex-col justify-between">
            <div>
                <Nav />
                <Header />
                    <main className="bg-gray-100 bg-opacity-100 min-h-screen ">
                        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 min-h-screen">
                            <div className="px-4 py-6 sm:px-0 min-h-screen">
                                <div className="box-border p-4 border-4 bg-white rounded-md min-h-screen">
                                    <div className="container my-12 mx-auto px-4 md:px-12">
                                        <div className="flex flex-wrap -mx-1 md:w-full lg:w-full">
                                            <Suspense fallback={<Loading />}>
                                                <Switch>
                                                    <Redirect exact from={match.url} to={`${match.url}/room/`} />
                                                    <Route exact path={`${match.url}/room/`} component={Home}/>
                                                    <Route path={`${match.url}/room/:roomId`} component={EditRoom}/>
                                                    <Route path={`${match.url}/booking`} component={BookingManagement} />
                                                    <Route component={<h1>Not found</h1>} />
                                                </Switch>
                                            </Suspense>
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
 
export default Layouts;