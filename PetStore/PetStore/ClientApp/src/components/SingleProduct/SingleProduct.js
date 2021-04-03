import React, { useEffect } from 'react';

import './SingleProduct.css';

const SingleProduct = () => {
    useEffect(() => {
        document.title = "Single product NAME";
    }, []);

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">Title of product</h3>

            <article className="single-product-container">
                <article className="single-product-image-container">
                    <img src="https://assetcdn.buhlergroup.com/rendition/874601345621/ab5fbfba5dc54202983d10bfb6473098/-TwebHeader_16x9" alt="" />

                    <p className="product-count">
                        <p className="product-in-search-price single inline">5.00$</p>

                        <input type="number" placeholder="0" className="input-control increase-product-count" />
                    </p>

                    <button className="btn btn-primary single-product-add-to-cart">Add to cart</button>
                </article>

                <article className="single-product-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis eligendi autem animi quos reprehenderit modi ullam ut officiis minus, maxime non sint optio cum voluptatem ad doloremque maiores. Earum.
                </article>
            </article>
        </section>
    );
};

export default SingleProduct;
