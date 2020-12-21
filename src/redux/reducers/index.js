// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import book from './book-reducer'
import addtocart from './addtocart-reducer'

export default combineReducers({
  book,
  addtocart
  // Here you can registering another reducers.
})