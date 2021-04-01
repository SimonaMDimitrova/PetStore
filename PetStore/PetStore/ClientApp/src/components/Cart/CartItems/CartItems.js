import React from 'react';
import style from './CartItems.css';

const CartItems = () => {
    return (
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
    );
};

export default CartItems;
