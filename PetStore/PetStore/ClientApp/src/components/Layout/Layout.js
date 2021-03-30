import React from 'react';
import Footer from './Footer/Footer'
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import style from './Layout.css';

const Layout = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default Layout;
