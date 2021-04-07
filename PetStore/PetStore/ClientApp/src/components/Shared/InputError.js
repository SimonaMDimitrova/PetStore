import React from 'react';
import './InputError.css';

const InputError = ({message}) => {
    return (
        <>
            {message ? (<div className="input-error">{message}</div>): null}
        </>
    );
};

export default InputError;