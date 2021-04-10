import React, { useEffect, useContext } from 'react';

import firebase from '../../utils/firebase';
import AuthContext from '../../contexts/AuthContext';

const Register = ({
    history
}) => {
    const { isAuthenticated, email } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/');
        }
    }, [isAuthenticated]);

    useEffect(() => {
        document.title = "Register";
    }, []);

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password && confirmPassword
            && password === confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(res => console.log('success'))
                .catch(err => console.log('Handled error:' + err));

            history.push('/login');
        }
    };

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">Register</h3>

            <form onSubmit={onRegisterSubmitHandler}>
                <article className="group-control">
                    <label htmlFor="email" className="group-control">Email</label>
                    <input type="text" name="email" id="email" className="input-control input-default" />
                </article>

                <article className="group-control">
                    <label htmlFor="password" className="group-control">Password</label>
                    <input type="password" name="password" id="password" className="input-control input-default" />
                </article>

                <article className="group-control">
                    <label htmlFor="confirmPassword" className="group-control">Confirm password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" className="input-control input-default" />
                </article>

                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
        </section>
    );
};

export default Register;
