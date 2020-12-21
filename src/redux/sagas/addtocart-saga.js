// Import the redux-saga/effects
import { put, call, takeLatest, select, takeEvery } from 'redux-saga/effects'

// Import all actions and api's
import { ADD_TO_CART, ADD_TO_CART_REQUESTED } from '../actions/cart-action'

// Here's the unique part, generator function*, function with asterisk(*)

// Get Todos
function* addToCart(payload) {
  yield put({ type: ADD_TO_CART, payload: payload })
}

// Export the saga (todo-saga)
export default function* addToCartSaga() {
  yield takeEvery(ADD_TO_CART_REQUESTED, addToCart)
}
