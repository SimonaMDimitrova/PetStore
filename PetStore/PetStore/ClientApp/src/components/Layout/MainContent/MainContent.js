﻿import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductFilter from './ProductFilter/ProductFilter';
import Products from '../../Products/Products';
import Contacts from '../../Contacts/Contacts';
import SingleProduct from '../../SingleProduct/SingleProduct';
import AddProduct from '../../AddProduct/AddProduct';
import EditProduct from '../../EditProduct/EditProduct';
import Cart from '../../Cart/Cart';
import Order from '../../Order/Order';
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
                    <Route path='/addProduct' component={AddProduct} />
                    <Route path='/editProduct' component={EditProduct} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/order' component={Order} />
                </Switch>
            </section>
    </main>
    );
};

export default MainContent;
