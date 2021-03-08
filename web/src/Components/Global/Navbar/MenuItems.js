import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';


export const MenuItems = [
    {
        title: 'Trang chủ',
        url: '#',
        cName: 'nav-links',
        icon: <HomeIcon/>
    },
    {
        title: 'Liên hệ',
        url: '#',
        cName: 'nav-links',
        icon: <PhoneIcon/>
    },
    {
        title: 'Đăng ký',
        url: '#',
        cName: 'nav-links',
        icon: <PersonIcon/>
    }
]