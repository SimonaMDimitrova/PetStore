import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems/CartItems';
import style from './Cart.css';

const Cart = () => {
    return (
        <section class="products-wrapper single-product">
            <h3>My cart</h3>

            <CartItems />

            <Link to="/order" class="btn btn-primary btn-link btn-position">Order now!</Link>
            <button className="btn display-block btn-position">Clear the cart</button>
        </section>
    );
};

export default Cart;
