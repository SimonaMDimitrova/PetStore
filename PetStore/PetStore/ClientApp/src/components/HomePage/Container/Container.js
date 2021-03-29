import React from 'react';
import style from './Container.css'

const Container = () => {
    return (
        <article className="home-page-welcome-container">
            <i className="fas fa-paw home-page-logo"></i>
            <h1 className="home-page-welcome-header">Welcome to PetStore!</h1>
            <p className="home-page-welcome-description">Get the best pet supplies online and in store! PetStore offers quality products and accessories for a healthier, happier pet.</p>

            <a href="#" className="shop-now-btn">Shop now!</a>
        </article>
    );
};

export default Container;
