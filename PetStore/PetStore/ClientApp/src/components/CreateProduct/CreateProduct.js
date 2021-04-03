﻿import React, { useEffect } from 'react';

const CreateProduct = () => {
    useEffect(() => {
        document.title = "Create a product";
    }, []);

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">Create a product</h3>

            <form>
                <article className="group-control">
                    <label htmlFor="" className="group-control">Name</label>
                    <input type="text" className="input-control input-default" />
                </article>

                <article className="group-control">
                    <label htmlFor="" className="group-control">Price</label>
                    <input type="text" className="input-control input-default" />
                </article>

                <article className="group-control">
                    <label htmlFor="" className="group-control">Capacity</label>
                    <input type="number" className="input-control input-default" />
                </article>

                <article className="group-control">
                    <label htmlFor="" className="group-control">Pet</label>
                    <select className="input-control input-default">
                        <option>Dog</option>
                        <option>Cat</option>
                    </select>
                </article>

                <article className="group-control">
                    <label htmlFor="" className="group-control">Product type</label>
                    <select className="input-control input-default">
                        <option>Food</option>
                        <option>Toys</option>
                    </select>
                </article>

                <article className="group-control">
                    <label htmlFor="" className="group-control"></label>
                    <input type="file" accept="image/png, image/jpeg" />
                </article>

                <input type="submit" value="Create" className="btn btn-primary" />
            </form>
        </section>
    );
};

export default CreateProduct;