import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';


export const MenuItems = [
    {
        title: 'Home',
        url: '/',
        cName: 'nav-links',
        icon: <HomeIcon/>
    },
    {
        title: 'Contact',
        url: '#',
        cName: 'nav-links',
        icon: <PhoneIcon/>
    },
    {
        title: 'Login',
        url: '/login',
        cName: 'nav-links',
        icon: <PersonIcon/>
    }
]