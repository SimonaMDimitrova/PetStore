import api from './api';

export const create = (productName, price, capacity, petId, productTypeId, image) => {
    let product = new FormData();
    product.append('Name', productName);
    product.append('price', price);
    product.append('capacity', capacity);
    product.append('petId', petId);
    product.append("productTypeId", productTypeId);
    product.append("image", image);

    return fetch(api.products, {
        method: 'POST',
        body: product
    })
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
}
