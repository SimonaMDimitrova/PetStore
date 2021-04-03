import React from 'react';

import './CartItems.css';

const CartItems = () => {
    return (
        <table className="table">
            <thead className="table-head">
                <tr className="tr">
                    <th className="th">Product</th>
                    <th className="th">Price</th>
                    <th className="th">Capacity</th>
                </tr>
            </thead>
            <tbody className="table-body">
                <tr className="tr">
                    <td className="td">Product #1</td>
                    <td className="td">100.00$</td>
                    <td className="td">5</td>
                </tr>
            </tbody>
            <tfoot className="table-footer">
                <tr className="tr">
                    <td colSpan="3" className="td all-price">All price: <strong>100.00$</strong></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default CartItems;
