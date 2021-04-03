import React from 'react';
import { Link } from 'react-router-dom';

import './NavbarItem.css';

const NavbarItem = (props) => {
    return (
        <li className="navbar-item"><Link to={`/${props.link}`}>{props.children}</Link></li>
    );
};

export default NavbarItem;
