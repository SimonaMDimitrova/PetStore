import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductFilter from './ProductFilter/ProductFilter';
import Products from '../../Products/Products';
import Contacts from '../../Contacts/Contacts';
import SingleProduct from '../../SingleProduct/SingleProduct';
import CreateProduct from '../../CreateProduct/CreateProduct';
import EditProduct from '../../EditProduct/EditProduct';
import DeleteProduct from '../../DeleteProduct/DeleteProduct';
import Cart from '../../Cart/Cart';
import Order from '../../Order/Order';

import './MainContent.css';

const MainContent = () => {
    return (
        <main className="main-content">
            <section className="main-content-container">
                <ProductFilter />

                <Switch>
                    <Route path='/' exact component={Products} />
                    <Route path='/contacts' component={Contacts} />
                    <Route path='/product/create' exact component={CreateProduct} />
                    <Route path='/product/:id' exact component={SingleProduct} />
                    <Route path='/product/:id/delete' exact component={DeleteProduct} />
                    <Route path='/product/:id/edit' exact component={EditProduct} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/order' component={Order} />
                </Switch>

            </section>
    </main>
    );
};

export default MainContent;
