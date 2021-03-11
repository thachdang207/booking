import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'

function Navbar() {
    const [isClicked, toggleClick] = useState(false);

    return (
        <div>
            <nav className="navbar-items">
                <h1
                    className="navbar-logo">VIBO.com
                </h1>
                <div className="menu-icon" 
                    onClick={
                        () => isClicked ? toggleClick(false) : toggleClick(true)
                    }>
                    <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={isClicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.icon}{" "}{item.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;