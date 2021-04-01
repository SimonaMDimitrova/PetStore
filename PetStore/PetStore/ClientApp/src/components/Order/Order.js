import React from 'react';
import CartItems from '../Cart/CartItems/CartItems';
import OrderForm from './OrderForm/OrderForm';

const Order = () => {
    return (
        <section class="products-wrapper single-product">
            <h3>My cart</h3>
            <CartItems />

            <h3 class="header">Make my order!</h3>
            <OrderForm />
        </section>
    );
}

export default Order;
