import React from 'react';
import { Link } from 'react-router-dom';

import * as productsService from '../../../services/productsService';

import './Product.css';

const Product = (props) => {
    const onDeleteSubmitHandler = (e) => {
        e.preventDefault();

        let productId = e.target.product.value;
        productsService.$delete(productId)
            .then(res => {
                console.log("Successfully deleted!");
            });

        console.log(props.history);
    }

    return (
        <article className="product-container">
            <article className="product-in-search-image-container">
                <Link to={`/product/${props.id}/delete`} className="delete-product"><i className="fas fa-times"></i></Link>
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
