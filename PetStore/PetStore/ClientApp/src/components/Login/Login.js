import React, { useEffect, useContext } from 'react';

import firebase from '../../utils/firebase';
import AuthContext from '../../contexts/AuthContext';

const Login = ({
    history
}) => {
    const { isAuthenticated, email } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated) {
            return history.push('/');
        }
    }, [isAuthenticated]);

    useEffect(() => {
        document.title = "Login";
    }, []);

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => console.log('success'))
            .catch(err => console.log('Handled error:' + err));

        history.push('/');
    };

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">Login</h3>

            <form onSubmit={onLoginSubmitHandler}>
                <article className="group-control">
                    <label htmlFor="email" className="group-control">Email</label>
                    <input type="text" name="email" id="email" className="input-control input-default" />
                </article>

                <article className="group-control">
                    <label htmlFor="password" className="group-control">Password</label>
                    <input type="password" name="password" id="password" className="input-control input-default" />
                </article>

                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
        </section>
    );
};

export default Login;
