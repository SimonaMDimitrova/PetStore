export const onNameErrorHandler = (productName) => {
    return productName.length < 3 || productName > 70
        ? 'Product name must be between 3 and 70 characters.'
        : '';
}; 

export const onPriceErrorHandler = (price) => {
    return price < 0.01 ? 'Price cannot be 0.' : '';
};

export const onCapacityErrorHandler = (capacity) => {
    return capacity < 0 ? 'Capacity cannot be negative.' : '';
};
