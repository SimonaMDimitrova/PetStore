import React from 'react';
import { Route } from 'react-router';
import ProductFilter from './ProductFilter/ProductFilter';
import Products from '../../Products/Products';
import style from './MainContent.css';

const MainContent = () => {
    return (
        <main className="main-content">
            <section className="main-content-container">
                <ProductFilter />

                <Route exact path='/' component={Products} />
            </section>
    </main>
    );
};

export default MainContent;
