import React from 'react';
import style from './ProductFilter.css'

const ProductFilter = () => {
    return (
        <section class="filter-wrapper">
            <h3>Search</h3>
            <label for="">Some text here</label>
            <input type="text" class="input-control" />
            <input type="submit" value="Search" class="btn" />
        </section>
    );
};

export default ProductFilter;
