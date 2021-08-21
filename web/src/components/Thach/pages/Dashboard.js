import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Breadcrumb from '../partials/dashboard/Breadcrumb';
import Card from "../components/Card"
function Dashboard() {

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
            <Breadcrumb />
            <div className="grid grid-cols-12 gap-6">
              <div class="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
                <Card />
              </div>
              
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;