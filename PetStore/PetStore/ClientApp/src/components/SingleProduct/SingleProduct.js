import React, { useEffect, useState } from 'react';

import * as productsService from '../../services/productsService';

import './SingleProduct.css';

const SingleProduct = ({
    match
}) => {
    const [state, setState] = useState({});
    useEffect(() => {
        productsService.getOne(match.params.id)
            .then(res => setState(res))
    });

    useEffect(() => {
        document.title = "View product";
    }, []);

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">{state.name}</h3>

            <article className="single-product-container">
                <article className="single-product-image-container">

                    <img src={state.imagePath} alt="" />

                    <p className="product-count">
                        <p className="product-in-search-price single inline">{state.price}</p>

                        <input type="number" placeholder="0" className="input-control increase-product-count" />
                    </p>

                    <button className="btn btn-primary single-product-add-to-cart">Add to cart</button>
                </article>

                <article className="single-product-description">
                    {state.description !== null ? state.description : `There is no description for ${state.name} product.`}
                </article>
            </article>
        </section>
    );
};

export default SingleProduct;
