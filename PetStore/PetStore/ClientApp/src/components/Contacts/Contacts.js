import React, { useEffect, useContext } from 'react';

import emailjs from 'emailjs-com';
import firebase from '../../utils/firebase';
import AuthContext from '../../contexts/AuthContext';

const Contacts = () => {
    const { isAuthenticated, email } = useContext(AuthContext);

    useEffect(() => {
        document.title = "Pet store - Products"
    }, []);

    useEffect(() => {
        document.title = "Contacts"
    }, []);

    const onSendEmailSubmitHandler = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d5sx4y9', 'template_n77hc8y', e.target, 'user_7edNxfOrE4vgskpVTGzQj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">Contact us</h3>

            <form onSubmit={onSendEmailSubmitHandler}>
                <article className="group-control">
                    <label htmlFor="mail" className="group-control">From</label>
                    <input type="text" name="mail" id="mail" className="input-control input-default" defaultValue={email} />
                </article>

                <article className="group-control">
                    <label htmlFor="subject" className="group-control">Message title</label>
                    <input type="text" name="subject" id="subject" className="input-control input-default" />
                </article>

                <textarea rows="10" type="text" name="message" id="message" className="input-control input-default" placeholder="Enter your message here!"></textarea>

                <input type="submit" value="Send e-mail!" className="btn btn-primary" />
            </form>
        </section>
    );
};

export default Contacts;
