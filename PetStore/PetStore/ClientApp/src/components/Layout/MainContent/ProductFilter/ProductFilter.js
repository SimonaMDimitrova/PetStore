import React from 'react';

import './ProductFilter.css'

const ProductFilter = () => {
    return (
        <aside className="filter-wrapper">
            <h3>Search</h3>
            <label>Some text here</label>
            <input type="text" className="input-control" />
            <input type="submit" value="Search" className="btn" />
        </aside>
    );
};

export default ProductFilter;
