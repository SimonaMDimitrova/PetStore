import React, { useEffect } from 'react';

const Contacts = () => {
    useEffect(() => {
        document.title = "Pet store - Products"
    }, []);

    useEffect(() => {
        document.title = "Contacts"
    }, []);

    return (
        <section className="products-wrapper single-product">
            <h3 className="header">Contact us</h3>

            <form action="">
                <article className="group-control">
                    <label htmlFor="" className="group-control">Message title</label>
                    <input type="text" className="input-control input-default" />
                </article>

                <textarea rows="10" type="text" className="input-control input-default" placeholder="Enter your message here!"></textarea>

                <input type="submit" value="Send e-mail!" className="btn btn-primary" />
            </form>
        </section>
    );
};

export default Contacts;
