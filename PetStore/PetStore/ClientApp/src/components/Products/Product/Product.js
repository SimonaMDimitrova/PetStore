import React from 'react';
import style from './Product.css'

const Product = (props) => {
    return (
        <article class="product-container">
            <article class="product-in-search-image-container">
                <img class="product-in-search-image" src={props.image} alt={props.productName} />
            </article>

            <h4 class="product-in-search-header">{props.productName}</h4>
            <p class="product-in-search-price">{props.price}</p>
            <a class="btn btn-primary">Add to cart</a>
        </article>
    );
};

export default Product;
