import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from './NavbarItem/NavbarItem';

import AuthContext from '../../../../contexts/AuthContext';
import firebase from '../../../../utils/firebase';

import './Navbar.css';

const Navbar = () => {
    const { isAuthenticated, email } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }

        firebase.auth().currentUser.getIdToken()
            .then(function (idToken) {
                return fetch('http://localhost:44340', {
                    headers: {
                        'Authorization': idToken,
                    }
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }, [isAuthenticated]);

    return (
        <nav className="navbar-wrapper">
            <ul className="navbar-items">
                <li className="navbar-item"><Link to="/"><i className="fas fa-paw"></i> PetStore</Link></li>

                <NavbarItem link="">Products</NavbarItem>
                <NavbarItem link="contacts">Contacts</NavbarItem>

                {isAuthenticated
                    ? <NavbarItem link="logout">Logout</NavbarItem>
                    : <>
                        <NavbarItem link="register">Register</NavbarItem>
                        <NavbarItem link="login">Login</NavbarItem>       
                    </>
                }

                <li className="navbar-item"><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
