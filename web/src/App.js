import React ,{ Suspense, useEffect } from 'react'
// import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import {Loading} from './pages/GlobalComponents/Loading'

// import AddHotel from './Admin/pages/AddHotel'
// import EditHotel from './Admin/pages/EditHotel'
// import HotelManagement from './Admin/pages/HotelManagement'
// import RoomManagement from './Admin/pages/RoomManagement'
// import ReviewManagement from './Admin/pages/ReviewManagement'
// import BookingManagement from './Admin/pages/BookingManagement'
// import AddRoom from './Admin/pages/AddRoom'
// import EditRoom from './Admin/pages/EditRoom'

import AOS from "aos";
import "aos/dist/aos.css";
import './assets/styles/App.css'

const Admin = React.lazy(() => import('./pages/Admin'));


function App() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: "ease-in-sine",  
        })
    },[])
  return (
    <div className="App">
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Switch>
                    {/* PUBLIC */}
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* ADMIN */}

                    {/* <ProtectedRoute
                        exact
                        path="/hotel-management"
                        component={Admin}
                    /> */}
                    {/* <ProtectedRoute
                        exact
                        path="/hotel-management"
                        component={HotelManagement}
                    />
                    <ProtectedRoute
                        exact
                        path="/add-hotel"
                        component={AddHotel}
                    />
                    <ProtectedRoute
                        exact
                        path="/edit-hotel/:id"
                        component={EditHotel}
                    />
                    <ProtectedRoute
                        exact
                        path="/room-management"
                        component={RoomManagement}
                    />
                    <ProtectedRoute
                        exact
                        path="/review-management"
                        component={ReviewManagement}
                    />
                    <ProtectedRoute
                        exact
                        path="/edit-room/:id"
                        component={EditRoom}
                    />
                    <ProtectedRoute
                        exact
                        path="/add-room"
                        component={AddRoom}
                    />
                    <ProtectedRoute
                        exact
                        path="/booking-management"
                        component={BookingManagement}
                    /> */}
                </Switch>
            </BrowserRouter>
        </Suspense>   
    </div>
  );
}

export default App;
