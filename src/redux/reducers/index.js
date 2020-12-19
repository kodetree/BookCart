// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import book from './book-reducer'

export default combineReducers({
  book,
  // Here you can registering another reducers.
})