/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/admin"
                                      className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline px-3 py-2 rounded-md text-sm font-medium">
                                    <button>Home</button>
                                </Link>
                                <Link to="/admin/room"
                                      className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline px-3 py-2 rounded-md text-sm font-medium">
                                    <button>Room</button>
                                </Link>
                                <Link to="/admin/booking"
                                      className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline px-3 py-2 rounded-md text-sm font-medium">
                                    <button>Booking</button>
                                </Link>
                                <Link to="/logout"
                                      className="text-gray-300 hover:bg-gray-700 hover:text-white hover:no-underline px-3 py-2 rounded-md text-sm font-medium">
                                    <button>Logout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>

    );
}

export default Nav;
