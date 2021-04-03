import React from 'react';

const OrderForm = () => {
    return (
        <form action="">
            <article className="group-control">
                <label htmlFor="" className="group-control">First name</label>
                <input type="text" className="input-control input-default" />
            </article>

            <article className="group-control">
                <label htmlFor="" className="group-control">Last name</label>
                <input type="text" className="input-control input-default" />
            </article>

            <article className="group-control">
                <label htmlFor="" className="group-control">Telephone number</label>
                <input type="text" className="input-control input-default" />
            </article>

            <article className="group-control">
                <label htmlFor="" className="group-control">Address</label>
                <input type="text" className="input-control input-default" />
            </article>

            <input type="submit" value="Send e-mail!" className="btn btn-primary" />
        </form>
    );
};

export default OrderForm;
