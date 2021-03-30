import React from 'react';
import ProductFilter from './ProductFilter/ProductFilter';
import style from './MainContent.css';

const MainContent = () => {
    return (
        <main className="main-content">
            <section className="main-content-container">
                <ProductFilter />

                <section className="products-wrapper single-product">
                    <h3 className="product-header">Contact us</h3>

                    <form action="">
                        <article className="group-control">
                            <label for="" className="group-control">Message title</label>
                            <input type="text" className="input-control input-default" />
                        </article>

                        <textarea type="text" className="input-control input-default">
                            Enter your message here!
                        </textarea>

                        <input type="submit" value="Send e-mail!" className="btn btn-primary" />
                    </form>
                </section>
            </section>
    </main>
    );
};

export default MainContent;
