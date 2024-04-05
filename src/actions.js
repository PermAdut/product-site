export const addToCart = product => ({ type: 'ADD_TO_CART', product });
export const updateQuantity = product => ({ type: 'UPDATE_QUANTITY', product });
export const deleteProduct = product => ({type: 'DELETE_PRODUCT', product})
export const reduceProduct = product => ({type: 'REDUCE_PRODUCT', product})