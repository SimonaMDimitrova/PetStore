import React, { useEffect, useState, useContext } from 'react';
import './DeleteProduct.css';

import * as productsService from '../../services/productsService';

import firebase from '../../utils/firebase';
import AuthContext from '../../contexts/AuthContext';

const DeleteProduct = ({
    match,
    history
}) => {
    const { isAuthenticated, email } = useContext(AuthContext);

    const [state, setState] = useState({
        id: '',
        name: ''
    });
    useEffect(() => {
        productsService.getName(match.params.id)
            .then(res => setState({ id: res.id, name: res.name }))
    }, []);

    useEffect(() => {
        document.title = 'Delete product';
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
            <form className="delete-form">
                <input type="submit" name="confirm" value="Yes" onClick={onDeleteClickHandler} className="btn" />
                <input type="submit" name="cancel" value="No" onClick={onRejectClickHandler} className="btn btn-primary" />
            </form>
        </section>
    );
};

export default DeleteProduct;
