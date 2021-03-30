import React from 'react';
import Navbar from './Navbar/Navbar';
import style from './Header.css';

const Header = () => {
    return (
        <header className="header-wrapper">
            <Navbar />
            <img className="header-image" src="https://www.kingcounty.gov/~/media/global/heroimages/raskc/pets-lineup-xlg.ashx" alt="" />
        </header>
    );
};

export default Header;
