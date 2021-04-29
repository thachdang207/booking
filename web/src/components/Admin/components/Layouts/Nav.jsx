/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/admin" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline px-3 py-2 rounded-md text-sm font-medium">
                                    <button>Home</button>
                                </Link>
                                <Link to="/admin/room" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline px-3 py-2 rounded-md text-sm font-medium">
                                    <button>Room</button>
                                </Link>
                                <Link to="/admin/booking" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline px-3 py-2 rounded-md text-sm font-medium">
                                    <button>Booking</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true" onClick={() => setNavbarOpen(!navbarOpen)}>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>

                                <div className={"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none " + (navbarOpen ? "" : "hidden")}
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/admin/room" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline px-3 py-1 rounded-md text-sm font-medium">
                        <button>Room</button>
                    </Link>
                    <Link to="/admin/booking" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline px-3 py-1 rounded-md text-sm font-medium">
                        <button>Booking</button>
                    </Link>
                </div>
                <div className="pt-1 pb-1 border-t border-gray-700">
                    <div className="mt-3 px-2 space-y-1">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Nav;
