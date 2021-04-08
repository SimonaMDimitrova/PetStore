import React, { useEffect, useState } from 'react';
import InputError from '../Shared/InputError';

import * as petsService from '../../services/petsService';
import * as productTypesService from '../../services/productTypesService';
import * as productsService from '../../services/productsService';
import * as errorHadlersService from '../../services/errorHandlersService';

const CreateProduct = ({
    history,
}) => {
    useEffect(() => {
        document.title = "Create product";
    }, [])

    const [petsState, setPetsState] = useState({});
    useEffect(() => {
        petsService.getAll()
            .then(pets => setPetsState(pets));
    }, [])

    const [productTypesState, setProductTypesState] = useState({});
    useEffect(() => {
        productTypesService.getAll()
            .then(productTypes => setProductTypesState(productTypes));
    }, [])

    const [productState, setProductState] =
        useState({
            name: '',
            price: 0,
            capacity: 0,
            pet: '',
            productType: '',
            image: null,
        });

    const [errorsState, setErrorsState] =
        useState({
            nameError: '',
            priceError: '',
            capacityError: '',
        });

    const onCreateProductSubmitHandler = (e) => {
        e.preventDefault();

        const { name, price, capacity, pet, productType, image } = e.target;

        setErrorsState({
            nameError: errorHadlersService.onNameErrorHandler(name.value),
            priceError: errorHadlersService.onPriceErrorHandler(price.value),
            capacityError: errorHadlersService.onCapacityErrorHandler(capacity.value),
        });

        let imageFile = image.files[0] != null ? image.files[0] : null;

        setProductState({
            name: name.value,
            price: price.value,
            capacity: capacity.value,
            pet: pet.value,
            productType: productType.value,
            image: imageFile,
        });

        productsService.create(
            name.value,
            price.value,
            capacity.value,
            pet.value,
            productType.value,
            imageFile
        )
            .then(() => history.push('/'))
            .catch(err => console.log('Handled error:' + err));
    };

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">Create a product</h3>

            <form onSubmit={onCreateProductSubmitHandler}>
                <article className="group-control">
                    <label htmlFor="name" className="group-control">Name</label>
                    <input name="name" id="name" type="text" defaultValue={productState.name} className="input-control input-default" />
                    <InputError message={errorsState.nameError} />
                </article>

                <article className="group-control">
                    <label htmlFor="price" className="group-control">Price</label>
                    <input name="price" id="price" type="text" defaultValue={productState.price} className="input-control input-default" />
                    <InputError message={errorsState.priceError} />
                </article>

                <article className="group-control">
                    <label htmlFor="capacity" className="group-control">Capacity</label>
                    <input name="capacity" id="capacity" type="number" defaultValue={productState.capacity} className="input-control input-default" />
                    <InputError message={errorsState.capacityError} />
                </article>

                <article className="group-control">
                    <label htmlFor="pet" className="group-control">Pet</label>
                    <select name="pet" id="pet" className="input-control input-default">

                        {petsState && petsState.length > 0
                            ? petsState
                                .map(pet => (
                                    <option
                                        defaultChecked={productState.pet === pet.key}
                                        value={pet.key}
                                        key={pet.key}>

                                        {pet.value}

                                    </option>))
                            : null}

                    </select>
                </article>

                <article className="group-control">
                    <label htmlFor="productType" className="group-control">Product type</label>
                    <select name="productType" id="productType" className="input-control input-default">

                        {productTypesState && productTypesState.length > 0
                            ? productTypesState
                                .map(productType =>
                                    (<option
                                        defaultChecked={productState.productType === productType.key}
                                        value={productType.key}
                                        key={productType.key}>

                                        {productType.value}

                                    </option>))
                            : null}

                    </select>
                </article>

                <article className="group-control">
                    <input name="image" id="image" type="file" accept="image/png, image/jpeg" />
                </article>

                <input type="submit" value="Create" className="btn btn-primary" />
            </form>
        </section>
    );
};

export default CreateProduct;
