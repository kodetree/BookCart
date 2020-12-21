import bookSaga from '../redux/sagas/book-saga'
import { connect } from 'react-redux'

import { ADD_TO_CART_REQUESTED } from '../redux/actions/cart-action'

function Book(props) {
  return (
    <div className="card" style={{ width: 18 + 'rem' }}>
      <img
        src={props.book.imageLink}
        className="card-img-top"
        style={{ width: 200, height: 200 }}
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.book.title}</h5>
        <p className="card-text">Book Description</p>
        <button className="btn btn-primary" onClick={props.addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: () =>
    dispatch({ type: ADD_TO_CART_REQUESTED, payload: ownProps.book }),
})

export default connect(null, mapDispatchToProps)(Book)
