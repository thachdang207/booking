import React from 'react'
// import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'

// import AddHotel from './Admin/pages/AddHotel'
// import EditHotel from './Admin/pages/EditHotel'
// import HotelManagement from './Admin/pages/HotelManagement'
// import RoomManagement from './Admin/pages/RoomManagement'
// import ReviewManagement from './Admin/pages/ReviewManagement'
// import BookingManagement from './Admin/pages/BookingManagement'
// import AddRoom from './Admin/pages/AddRoom'
// import EditRoom from './Admin/pages/EditRoom'

import './assets/styles/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            {/* PUBLIC */}
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/logout" component={Logout} />

            {/* ADMIN */}
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
      </Router>
    </div>
  );
}

export default App;
