/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import './Global.css'



function Header() {

    const state = useSelector((state) => state);
    const [isClicked, toggleClick] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleClickChange = () => {
        toggleClick(!isClicked);
    }

    const navOnScrolling = () => {
        if(window.scrollY >= 20){
            setIsScrolling(true);
        }else{
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
                            <li>
                                <Link to="/">
                                    <button className="header-links">
                                        Home
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/logout">
                                    <button className="header-links">
                                        Hi,{" "} Logout
                                    </button>
                                </Link>
                            </li>
                        </>
                    )
                    }
                </ul>
            </header>
        </div>
    );
}

export default Header;