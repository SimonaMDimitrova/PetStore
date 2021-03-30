import React from 'react';
import ProductFilter from './ProductFilter/ProductFilter';
import style from './MainContent.css';

const MainContent = () => {
    return (
        <main class="main-content">
            <section class="main-content-container">
                <ProductFilter />

                <section class="products-wrapper single-product">
                    <h3 class="product-header">Contact us</h3>

                    <form action="">
                        <article class="group-control">
                            <label for="" class="group-control">Message title</label>
                            <input type="text" class="input-control input-default" />
                        </article>

                        <textarea type="text" class="input-control input-default">
                            Enter your message here!
                        </textarea>

                        <input type="submit" value="Send e-mail!" class="btn btn-primary" />
                    </form>
                </section>
            </section>
    </main>
    );
};

export default MainContent;
