import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from './NavbarItem/NavbarItem'
import style from './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar-wrapper">
            <ul class="navbar-items">
                <li class="navbar-item"><Link to="/products"><i class="fas fa-paw"></i> PetStore</Link></li>

                <NavbarItem link="products">Products</NavbarItem>
                <NavbarItem link="contacts">Contacts</NavbarItem>

                <li class="navbar-item"><Link to="/cart"><i class="fas fa-shopping-cart"></i></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
