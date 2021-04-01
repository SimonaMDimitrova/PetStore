import React from 'react';
import Product from './Product/Product'
import style from './Products.css';

const Products = () => {
    return (
        <section className="products-wrapper">
            <h3>Found: 123 results</h3>
            <article className="products-container">
                <Product
                    image="https://assetcdn.buhlergroup.com/rendition/874601345621/ab5fbfba5dc54202983d10bfb6473098/-TwebHeader_16x9"
                    productName="Title of product"
                    price="5.00$" />

                <Product
                    image="https://assetcdn.buhlergroup.com/rendition/874601345621/ab5fbfba5dc54202983d10bfb6473098/-TwebHeader_16x9"
                    productName="Title of product"
                    price="5.00$" />

                <Product
                    image="https://assetcdn.buhlergroup.com/rendition/874601345621/ab5fbfba5dc54202983d10bfb6473098/-TwebHeader_16x9"
                    productName="Title of product"
                    price="5.00$" />

                <Product
                    image="https://assetcdn.buhlergroup.com/rendition/874601345621/ab5fbfba5dc54202983d10bfb6473098/-TwebHeader_16x9"
                    productName="Title of product"
                    price="5.00$" />
            </article>
        </section>
    );
};

export default Products;
