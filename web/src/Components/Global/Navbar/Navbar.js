import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faHome, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'


function Navbar() {
    const MenuItems = [
        {
            title: 'Trang chủ',
            url: '/',
            cName: 'nav-links',
            icon: <FontAwesomeIcon icon={faHome} />
        },
        {
            title: 'Liên hệ',
            url: '#',
            cName: 'nav-links',
            icon: <FontAwesomeIcon icon={faPhoneAlt} />
        },
        {
            title: 'Đăng nhập',
            url: '/login',
            cName: 'nav-links',
            icon: <FontAwesomeIcon icon={faUser} />
        }
    ]
    const [isClicked, toggleClick] = useState(false);

    return (
        <div>
            <nav className="navbar-items">
                <h1>VIBO.com</h1>
                <div className="menu-icon" 
                    onClick={
                        () => isClicked ? toggleClick(false) : toggleClick(true)
                    }>
                    <FontAwesomeIcon icon={isClicked ? faTimes : faBars } />
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