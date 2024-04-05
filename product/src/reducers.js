const initialState = {
    cartCount: 0, 
    cartProducts: []
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartCount: state.cartCount + 1,
          cartProducts: [...state.cartProducts, action.product]
        };
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cartProducts: state.cartProducts.map(prod =>
            prod.id === action.id
              ? {...prod, value: (prod.value || 0) + 1}
              : prod
          )
        };
      default:
        return state;
    }
  }
  
  export default rootReducer;