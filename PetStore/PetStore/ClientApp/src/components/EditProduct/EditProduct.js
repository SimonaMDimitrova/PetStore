import React, { useEffect } from 'react';

const EditProduct = () => {
    useEffect(() => {
        document.title = "Edit NAME product";
    }, []);

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">Edit product NAME</h3>

            <form action="">
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

                <input type="submit" value="Send e-mail!" className="btn btn-primary" />
            </form>
        </section>
    );
};

//product.Name = input.Name;
//product.Price = input.Price;
//product.Capacity = input.Capacity;

export default EditProduct;
