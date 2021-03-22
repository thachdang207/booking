import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import './Global.css'


function Header() {
    const MenuItems = [
        {
            title: 'Home',
            url: '/',
            cName: 'header-links',
            icon: <FontAwesomeIcon icon={faHome} />
        },
        {
            title: 'Login',
            url: '/login',
            cName: 'header-links',
            icon: <FontAwesomeIcon icon={faUser} />
        }
    ]
    const [isClicked, toggleClick] = useState(false);
    const handleClickChange = () => {
        toggleClick(!isClicked);
    }

    return (
        <div>
            <header className="header-items">
                <h2>VIBO.com</h2>
                <div className="menu-icon" 
                    onClick={handleClickChange}>
                    <FontAwesomeIcon icon={isClicked ? faTimes : faBars } />
                </div>
                <ul className={isClicked ? 'header-menu active': 'header-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                        <li key={index}>
                            <Link to={item.url}>
                                <button className={item.cName}>
                                    {item.icon}{" "}{item.title}
                                </button>
                            </Link>
                        </li>
                        )
                    })}
                </ul>
            </header>
        </div>
    );
}
 
export default Header;