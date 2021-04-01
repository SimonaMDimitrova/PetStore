import React from 'react';
import { Link } from 'react-router-dom';
import style from './Cart.css';

const Cart = () => {
    return (
        <section class="products-wrapper single-product">
            <h3 class="product-header">My cart</h3>

            <table class="table">
                <thead class="table-head">
                    <tr class="tr">
                        <th class="th">Product</th>
                        <th class="th">Price</th>
                        <th class="th">Capacity</th>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr class="tr">
                        <td class="td">Product #1</td>
                        <td class="td">100.00$</td>
                        <td class="td">5</td>
                    </tr>
                </tbody>
                <tfoot class="table-footer">
                    <tr class="tr">
                        <td colspan="3" class="td all-price">All price: <strong>100.00$</strong></td>
                    </tr>
                </tfoot>
            </table>

            <Link to="/order" class="btn btn-primary btn-link btn-position">Order now!</Link>
        </section>
    );
};

export default Cart;
