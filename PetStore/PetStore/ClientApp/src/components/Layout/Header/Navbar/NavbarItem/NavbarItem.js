﻿import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import style from './NavbarItem.css';

const NavbarItem = (props) => {
    return (
        <li class="navbar-item"><Link to={`/${props.link}`}>{props.children}</Link></li>
    );
};

export default NavbarItem;
