import React, { useState, useEffect } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Breadcrumb from '../partials/dashboard/Breadcrumb';
import { Switch, Route, useRouteMatch } from "react-router-dom"
import Rooms from './Rooms'
import Bookings from './Booking';
import AdminProfile from './Profile';

function Dashboard() {
  useEffect(() => {
    document.title = `Admin`
  })
  const match = useRouteMatch();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Breadcrumb title="Dashboard"/>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-full xl:col-span-12 bg-indigo-100 shadow-lg rounded-sm border border-gray-200">
                <Switch>
                  <Route exact path={`${match.url}`} component={AdminProfile} />
                  <Route path={`${match.url}/room`} exact component={Rooms} />
                  {/* <Route path={`${match.url}/update-location/`} exact component={UpdateLocation} /> */}
                  <Route path={`${match.url}/booking`} exact component={Bookings} />
                  <Route exact component={Error} />
                </Switch>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;