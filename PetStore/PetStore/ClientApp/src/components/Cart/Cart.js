import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems/CartItems';

import './Cart.css';

const Cart = () => {
    useEffect(() => {
        document.title = "Cart";
    }, []);

    return (
        <section className="products-wrapper single-product">
            <h3>My cart</h3>

            <CartItems />

            <Link to="/order" className="btn btn-primary btn-link btn-position">Order now!</Link>
            <button className="btn display-block btn-position">Clear the cart</button>
        </section>
    );
};

export default Cart;
