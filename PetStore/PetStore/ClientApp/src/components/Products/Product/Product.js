import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css'

const Product = (props) => {
    return (
        <article className="product-container">
            <article className="product-in-search-image-container">
                <button className="delete-product"><i className="fas fa-times"></i></button>
                <Link to={`/products/product`}><img className="product-in-search-image" src={props.image} alt={props.productName} /></Link>
            </article>

            <h4 className="product-in-search-header">{props.productName}</h4>
            <p className="product-in-search-price">{props.price}</p>
            <button className="btn btn-primary">Add to cart</button>
            <Link to="/editProduct" className="btn btn-link link-display-block">Edit</Link>
        </article>
    );
};

export default Product;
