import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// bring connect from react-redux, it's the bridge for connecting component to redux
import { connect } from 'react-redux'

// bring the actions, just bring that have REQUESTED in the suffix
// If you dispatching that doesn't have REQUESTED, it will not work
import {
  GET_BOOKS_REQUESTED
} from '../redux/actions/books-action'
import Book from './book.component'


const BookList = ({
  book: { loading, books },
  getBooks
}) => {
  useEffect(() => {
    getBooks()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
        <div className="row row-cols-4">
      {loading && 'Loading...'}    
  
      {books && books.map((book, index) => (
        <div className="col">
            <Book book={book} key={index}  />
        </div>        
      ))}
      </div>
    </div>    
  )
}


// Get state to props
const mapStateToProps = (state) => ({
  book: state.book
})

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
  getBooks: () => dispatch({ type: GET_BOOKS_REQUESTED })
})

// To make those two function works register it using connect
export default connect(mapStateToProps, mapDispatchToProps)(BookList)