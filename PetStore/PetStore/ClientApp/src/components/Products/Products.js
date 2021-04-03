import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product/Product';

import './Products.css';

const Products = () => {
    useEffect(() => {
        document.title = "Pet store"
    }, []);

    return (
        <section className="products-wrapper">
            <Link to="/product/create" className="btn btn-link">New product</Link>
            <h3>Found: 123 results</h3>
            <article className="products-container">
                <Product
                    key="product_1"
                    id="1"
                    image="https://assetcdn.buhlergroup.com/rendition/874601345621/ab5fbfba5dc54202983d10bfb6473098/-TwebHeader_16x9"
                    productName="Title of product"
                    price="5.00$" />

                <Product
                    key="product_2"
                    id="2"
                    image="https://assetcdn.buhlergroup.com/rendition/874601345621/ab5fbfba5dc54202983d10bfb6473098/-TwebHeader_16x9"
                    productName="Title of product"
                    price="5.00$" />

                <Product
                    key="product_3"
                    id="3"
                    image="https://assetcdn.buhlergroup.com/rendition/874601345621/ab5fbfba5dc54202983d10bfb6473098/-TwebHeader_16x9"
                    productName="Title of product"
                    price="5.00$" />

                <Product
                    key="product_4"
                    id="4"
                    image="https://assetcdn.buhlergroup.com/rendition/874601345621/ab5fbfba5dc54202983d10bfb6473098/-TwebHeader_16x9"
                    productName="Title of product"
                    price="5.00$" />
            </article>
        </section>
    );
};

export default Products;
