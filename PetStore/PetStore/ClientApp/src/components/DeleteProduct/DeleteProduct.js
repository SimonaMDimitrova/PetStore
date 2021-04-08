import React, { useEffect, useState } from 'react';
import './DeleteProduct.css';

import * as productsService from '../../services/productsService';

const DeleteProduct = ({
    match,
    history
}) => {
    const [state, setState] = useState({
        id: '',
        name: ''
    });
    useEffect(() => {
        productsService.getName(match.params.id)
            .then(res => setState({id: res.id, name: res.name}))
    }, []);

    const onDeleteClickHandler = (e) => {
        e.preventDefault();

        console.log(state.id);
        productsService.$delete(state.id)
            .then(res => {
                console.log("Successfully deleted!");
            });

        history.push('/');
    }

    const onRejectClickHandler = (e) => {
        history.push('/');
    };

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">Are you sure you want to delete {state.name}?</h3>
            <form class="delete-form">
                <input type="submit" name="confirm" value="Yes" onClick={onDeleteClickHandler} className="btn" />
                <input type="submit" name="cancel" value="No" onClick={onRejectClickHandler} className="btn btn-primary" />
            </form>
        </section>
    );
};

export default DeleteProduct;
