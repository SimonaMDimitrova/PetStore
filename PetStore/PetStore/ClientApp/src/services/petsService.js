import api from './api';

export const getAll = () => {
    return fetch(api.pets)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};