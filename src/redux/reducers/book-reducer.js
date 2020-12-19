import { 
    SET_LOADING,
    GET_BOOKS,
  } from '../actions/books-action'
  
  // Define your state here
  const initialState = {
    loading: false,
    books: []
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
      // Set loading
      case SET_LOADING:
        return {
          ...state,
      loading: true
        }
      // Get todos
      case GET_BOOKS:
        return {
          ...state,
          books: payload,
          loading: false
        }
      // Return default state if you didn't match any case
      default:
        return state
    }
  }