import React from 'react';
import style from './Product.css'

const Product = (props) => {
    return (
        <article className="product-container">
            <article className="product-in-search-image-container">
                <img className="product-in-search-image" src={props.image} alt={props.productName} />
            </article>

            <h4 className="product-in-search-header">{props.productName}</h4>
            <p className="product-in-search-price">{props.price}</p>
            <button className="btn btn-primary">Add to cart</button>
        </article>
    );
};

export default Product;
