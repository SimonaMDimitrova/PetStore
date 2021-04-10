import React, { useState } from 'react';

import './ProductFilter.css'

const ProductFilter = () => {
    const [searchState, setSearchState] = useState('');



    return (
        <aside className="filter-wrapper">
            <h3>Search</h3>

            <form method="get" className="no-margins">
                <article className="group-control">
                    <label htmlFor="searchByProductName" className="group-control">Search a product</label>
                    <input name="searchByProductName" id="searchByProductNamename" type="text" defaultValue={searchState} className="input-control" />
                </article>

                <input type="submit" value="Search" className="btn" />
            </form>

        </aside>
    );
};

export default ProductFilter;
