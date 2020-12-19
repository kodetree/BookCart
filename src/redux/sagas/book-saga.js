// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
  
  // Import all actions and api's
  import {
    SET_LOADING,
    GET_BOOKS,
    GET_BOOKS_REQUESTED
  } from '../actions/books-action'
  
  // Import all api's
  import {
    getBooksApi
  } from '../api/book-api'
  
  // Here's the unique part, generator function*, function with asterisk(*)
  
  // Get Todos
  function* getBooks() {
    yield put({ type: SET_LOADING })
  
    const books = yield call(getBooksApi)
  
    yield put({ type: GET_BOOKS, payload: books })
  }

  // Export the saga (todo-saga)
  export default function* bookSaga() {
    yield takeEvery(GET_BOOKS_REQUESTED, getBooks)
  }