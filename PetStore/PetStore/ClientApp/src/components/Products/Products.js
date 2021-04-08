import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product/Product';

import * as productsService from '../../services/productsService';

import './Products.css';

const Products = () => {
    useEffect(() => {
        document.title = "Pet store"
    }, []);

    const [productsState, setProductsState] = useState({});
    useEffect(() => {
        productsService.getAll()
            .then(products => setProductsState(products));
    }, [])

    return (
        <section className="products-wrapper">
            <Link to="/product/create" className="btn btn-link">Create product</Link>
            <h3>{`Found: ${productsState.products && productsState.products.length > 0 ? productsState.products.length : 0} results`}</h3>
            <article className="products-container">

                {productsState.products && productsState.products.length > 0
                    ? productsState.products
                        .map(product => {
                            return (<Product
                                key={`product_${product.id}`}
                                id={product.id}
                                image={product.imagePath}
                                productName={product.name}
                                price={`${product.price}$`} />)
                        })
                    : null}

            </article>
        </section>
    );
};

export default Products;
