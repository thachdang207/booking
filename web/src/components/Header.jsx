/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useSecureLs } from './UseSecureLs'

import './Global.css'



function Header() {

    const state = useSelector((state) => state);
    const [isClicked, toggleClick] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [id] = useSecureLs("user_id")

    const handleClickChange = () => {
        toggleClick(!isClicked);
    }

    const navOnScrolling = () => {
        if (window.scrollY >= 20) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    }

    window.addEventListener("scroll", navOnScrolling);


    return (
        <div>
            <header className={isScrolling ? 'header-items active' : 'header-items'}>
                <p className="header-logo">VIBO.com</p>
                <div className="menu-icon"
                    onClick={handleClickChange}>
                    <FontAwesomeIcon icon={isClicked ? faTimes : faBars} />
                </div>
                <ul className={isClicked ? 'header-menu active' : 'header-menu'}>
                    {!state.auth.isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/">
                                    <button className="header-links">
                                        Home
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <button className="header-links">
                                        Login
                                    </button>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li
                                aria-label="dropdown button"
                                className="mr-5 text-white hover:text-gray-400 "
                                onClick={() => setDropDown(!dropDown)}
                            >
                                <span className="pb-2 pl-24">
                                    <FontAwesomeIcon icon={faCaretDown}
                                        className="fa-lg fa-2x cursor-pointer"
                                    />
                                </span>
                                <br />
                            </li>
                            <div
                                className="absolute right-0 md:mt-16 mr-10 xl:mr-20 w-48 rounded-sm  shadow-lg py-0.5 bg-gray-100 text-lg"
                                onClick={() => setDropDown(!dropDown)}
                                onMouseLeave={() => setDropDown(false)}
                                style={
                                    !dropDown
                                        ? { display: "none" }
                                        : { display: "block" }
                                }
                            >
                                <li>
                                    <Link to={`/user-profile/${id}`}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                                    >
                                        <button>
                                            Your profile
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/logout"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                                    >
                                        <button>
                                            Hi,{" "} Logout
                                        </button>
                                    </Link>
                                </li>
                            </div>
                        </>
                    )}
                </ul>
            </header>
        </div>
    );
}

export default Header;