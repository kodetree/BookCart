import { spawn } from 'redux-saga/effects'

// Sagas
import bookSaga from './book-saga'
import addToCartSaga from './addtocart-saga'

// Export the root saga
export default function* rootSaga() {
  console.log('Hello From Redux-Saga!')

  yield spawn(bookSaga)

  yield spawn(addToCartSaga)
}
