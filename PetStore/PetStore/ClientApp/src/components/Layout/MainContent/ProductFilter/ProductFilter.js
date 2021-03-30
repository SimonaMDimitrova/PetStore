import React from 'react';
import style from './ProductFilter.css'

const ProductFilter = () => {
    return (
        <section className="filter-wrapper">
            <h3>Search</h3>
            <label for="">Some text here</label>
            <input type="text" className="input-control" />
            <input type="submit" value="Search" className="btn" />
        </section>
    );
};

export default ProductFilter;
