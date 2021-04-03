import React, { useEffect } from 'react';
import CartItems from '../Cart/CartItems/CartItems';
import OrderForm from './OrderForm/OrderForm';

const Order = () => {
    useEffect(() => {
        document.title = "Order";
    }, []);

    return (
        <section className="products-wrapper single-product">
            <h3>My cart</h3>
            <CartItems />

            <h3 className="header">Make my order!</h3>
            <OrderForm />
        </section>
    );
}

export default Order;
