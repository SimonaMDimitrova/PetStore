import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from './NavbarItem/NavbarItem'
import style from './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-wrapper">
            <ul className="navbar-items">
                <li className="navbar-item"><Link to="/"><i className="fas fa-paw"></i> PetStore</Link></li>

                <NavbarItem link="">Products</NavbarItem>
                <NavbarItem link="contacts">Contacts</NavbarItem>

                <li className="navbar-item"><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
