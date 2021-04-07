import api from './api';

export const getAll = () => {
    return fetch(api.productTypes)
        .then(res => res.json())
        .catch(err => console.log('Handled error: ' + err));
};
