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
            <article className="single-product-type">
                <span className="badge">{state.petType}</span>
                <span className="badge">{state.productType}</span>
                <span className="single-price">Price: {state.price}$</span>
            </article>

            <article className="single-product-container">
                <article className="single-product-image-container">

                    <img src={state.imagePath} alt="" />

                    <button className="btn btn-primary single-product-add-to-cart">Add to cart</button>
                </article>

                <article className="single-product-description">
                    <article>
                        {state.description !== null ? state.description : `There is no description for ${state.name} product.`}
                    </article>
                </article>
            </article>
        </section>
    );
};

export default SingleProduct;
