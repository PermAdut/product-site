const initialState = {
    cartCount: 0, 
    cartProducts: [],
    totalPrice: 0,
    products: [
      {
        id:1,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        img: "Fjallraven.jpg"
      },
      {
        id:2,
        name: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.30,
        img: "T-Shirt.jpg"
      },
      {
        id:3,
        name: "Mens Cotton Jacket",
        price: 55.99,
        img:"Cotton.jpg"
      },
      {
        id:4,
        name: "Mens Casual Slim Fit",
        price: 15.99,
        img:"Slim.jpg"
      },
      {
        id:5,
        name: "BIYLACLESEN Women's 3-in-1 Showboard Jacket Winter Coats",
        price: 56.99,
        img:"BIYA.jpg"
      },
      {
        id:6,
        name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        img: "LockandLove.jpg"
      },
      {
        id:7,
        name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        img: "Rain.jpg"
      },
      {
        id:8,
        name: "MBJ Women's Solid Short Sleeve Boat Neck V",
        price: 9.85,
        img: "MBJ.jpg"
      },
      {
        id:9,
        name: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        img:"Opna.jpg"
      },
    ]
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartCount: state.cartCount + 1,
          cartProducts: [...state.cartProducts, action.product],
          totalPrice: state.totalPrice + action.product.price,
        };
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cartProducts: state.cartProducts.map(prod =>
            prod.id === action.product.id
              ? {...prod, value: prod.value + 1}
              : prod
          ),
          totalPrice: state.totalPrice + action.product.price
        };
      case 'DELETE_PRODUCT':
        return{
          ...state,
          cartCount: state.cartCount - 1,
          cartProducts: state.cartProducts.filter(prod => 
            prod.id !== action.product.id  
          ),
          totalPrice :state.totalPrice - action.product.price * action.product.value,
        } 
      case 'REDUCE_PRODUCT':
        if(action.product.value === 1){
          return{
            ...state,
            cartCount: state.cartCount - 1,
            cartProducts: state.cartProducts.filter(prod => 
              prod.id !== action.product.id  
            ),
            totalPrice :state.totalPrice - action.product.price * action.product.value,
          }  
        }
        else{
          return {
            ...state,
            cartProducts: state.cartProducts.map(prod =>
              prod.id === action.product.id
                ? {...prod, value: prod.value - 1}
                : prod
            ),
            totalPrice: state.totalPrice - action.product.price
          }
        }
      default:
        return state;
    }
  }
  
  export default rootReducer;