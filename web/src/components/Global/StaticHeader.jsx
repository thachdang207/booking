import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useSecureLs } from './UseSecureLs'
import { getUser } from '../../redux/actions/user.action';
import LoggedInInfo from './LoggedInInfo';
import './Global.css'

function StaticHeader() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [isClicked, toggleClick] = useState(false);
    const [token] = useSecureLs("token")
    const handleClickChange = () => {
        toggleClick(!isClicked);
    }

    useEffect(() => {
        if (state.auth.isAuthenticated) {
            getUser(dispatch, token);
        }
    }, [dispatch, state.auth.isAuthenticated, token])

    return (
        <div>
            <header className='static-header-items'>
                <a href="/" className="header-logo">VIBO.com</a>
                <div className="menu-icon"
                    onClick={handleClickChange}>
                    <FontAwesomeIcon icon={isClicked ? faTimes : faBars} />
                </div>
                <ul className={isClicked ? 'header-menu active' : 'header-menu'}>
                    {!state.auth.isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/" className="header-links">
                                    <button>
                                        Home
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="header-links">
                                    <button>
                                        Login
                                    </button>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <LoggedInInfo user={state.user.user} />
                        </>
                    )}
                </ul>
            </header>
        </div>
    );
}

export default StaticHeader;
