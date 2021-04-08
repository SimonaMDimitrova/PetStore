import api from './api';

export const getAll = () => {
    return fetch(api.products)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};

export const getName = (id) => {
    return fetch(`${api.products}/name?id=${id}`)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
}

export const create = (productName, price, capacity, petId, productTypeId, image) => {
    let product = new FormData();
    product.append('name', productName);
    product.append('price', price);
    product.append('capacity', capacity);
    product.append('petId', petId);
    product.append("productTypeId", productTypeId);
    product.append("image", image);

    return fetch(api.products, {
        method: 'POST',
        body: product
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error('Invalid input');
        });
}

export const $delete = (productId) => {
    const product = new FormData();
    product.append("id", productId);

    return fetch(api.products, {
        method: 'DELETE',
        body: product
    })
        .catch(err => console.log('Handled error:' + err));
}
