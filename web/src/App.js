import React ,{ Suspense, useEffect } from 'react'
import { ProtectedRoute } from './ProtectedRoute'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Loading } from './components/Loading'
import Unauthorized from './components/Unauthorizated'

import UserProfile from './pages/User/UserProfile'

// import AddHotel from './Admin/pages/AddHotel'
// import EditHotel from './Admin/pages/EditHotel'
// import HotelManagement from './Admin/pages/HotelManagement'
// import RoomManagement from './Admin/pages/RoomManagement'
// import ReviewManagement from './Admin/pages/ReviewManagement'
// import BookingManagement from './Admin/pages/BookingManagement'
// import AddRoom from './Admin/pages/AddRoom'
// import EditRoom from './Admin/pages/EditRoom'
import Hotel from './pages/Hotel'

import AOS from "aos";
import "aos/dist/aos.css";
import './assets/styles/App.css'

const Admin = React.lazy(() => import('./pages/Admin'));
const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));
const Logout = React.lazy(() => import('./pages/Logout'));


function App() {

    useEffect(() => {
        AOS.init({
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
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/hotel/:id" component={Hotel} />

                    {/* USER */}

                    <ProtectedRoute
                        exact path="/user-profile/:id"
                        component={UserProfile}
                    />

                    {/* ADMIN */}
                    
                    <ProtectedRoute
                        exact path='/admin'
                        component={Admin}
                    />
                    {/* <ProtectedRoute
                        exact
                        path="/hotel-management"
                        component={HotelManagement}
                    /> */}
                    {/* <ProtectedRoute
                        exact
                        path="/add-hotel"
                        component={AddHotel}
                    /> */}
                    {/* <ProtectedRoute
                        exact
                        path="/edit-hotel/:id"
                        component={EditHotel}
                    /> */}
                    {/* <ProtectedRoute
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
                    <Route exact path="/401" component={Unauthorized} />
                </Switch>
            </BrowserRouter>
        </Suspense>   
    </div>
  );
}

export default App;
