﻿import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductFilter from './ProductFilter/ProductFilter';
import Products from '../../Products/Products';
import Contacts from '../../Contacts/Contacts';
import SingleProduct from '../../SingleProduct/SingleProduct';
import style from './MainContent.css';

const MainContent = () => {
    return (
        <main className="main-content">
            <section className="main-content-container">
                <ProductFilter />

                <Switch>
                    <Route exact path='/' component={Products} />
                    <Route path='/contacts' component={Contacts} />
                    <Route path='/products/product' component={SingleProduct} />
                </Switch>
            </section>
    </main>
    );
};

export default MainContent;