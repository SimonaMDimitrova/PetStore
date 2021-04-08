﻿import React, { useEffect, useState } from 'react';
import InputError from '../Shared/InputError';

import * as productsService from '../../services/productsService';
import * as errorHadlersService from '../../services/errorHandlersService';

const EditProduct = ({
    match,
    history
}) => {
    const [productState, setProductState] = useState({});

    useEffect(() => {
        productsService
            .getEditModel(match.params.id)
                .then(res => setProductState({
                    id: res.productId,
                    name: res.name,
                    price: res.price,
                    capacity: res.capacity,
                }))
    }, []);

    useEffect(() => {
        document.title = "Edit product";
    }, []);

    const [errorsState, setErrorsState] =
        useState({});

    const onEditProductSubmitHandler = (e) => {
        e.preventDefault();

        const { name, price, capacity, id } = e.target;

        setErrorsState({
            nameError: errorHadlersService.onNameErrorHandler(name.value),
            priceError: errorHadlersService.onPriceErrorHandler(price.value),
            capacityError: errorHadlersService.onCapacityErrorHandler(capacity.value),
        });

        setProductState({
            name: name.value,
            price: price.value,
            capacity: capacity.value,
            id: id
        });

        productsService.edit(
            name.value,
            price.value,
            capacity.value,
            id.value
        )
            .then(() => history.push('/'))
            .catch(err => console.log('Handled error:' + err));
    };

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">Edit product {productState.name}</h3>

            <form onSubmit={onEditProductSubmitHandler}>
                <article className="group-control">
                    <label htmlFor="name" className="group-control">Name</label>
                    <input type="text" name="name" id="name" defaultValue={productState.name} className="input-control input-default" />
                    <InputError message={errorsState.nameError} />
                </article>

                <article className="group-control">
                    <label htmlFor="price" className="group-control">Price</label>
                    <input type="number" step=".01" name="price" id="price" defaultValue={productState.price} className="input-control input-default" />
                    <InputError message={errorsState.priceError} />
                </article>

                <article className="group-control">
                    <label htmlFor="" className="group-control">Capacity</label>
                    <input type="number" name="capacity" id="capacity" defaultValue={productState.capacity} className="input-control input-default" />
                    <InputError message={errorsState.capacityError} />
                </article>

                <input type="hidden" name="id" id="id" defaultValue={productState.id} />

                <input type="submit" value="Edit product" className="btn btn-primary" />
            </form>
        </section>
    );
};

export default EditProduct;
