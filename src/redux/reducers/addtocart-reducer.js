import { 
    ADD_TO_CART
  } from '../actions/cart-action'
  
  // Define your state here
  const initialState = {
      cartItems:[]
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {   
    
    switch(type) {
        
      // Set loading
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, payload]
        }
      // Return default state if you didn't match any case
      default:
        return state
    }
  }