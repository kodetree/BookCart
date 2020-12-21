import { connect } from 'react-redux'

const CartItems = (props) => {
  debugger
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Book</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems &&
            props.cartItems.map((item, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{item.payload.title}</td>
                <td>{item.payload.author}</td>
                <td>{item.payload.pages}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

// Get state to props
const mapStateToProps = (state) => ({
  cartItems: state.addtocart.cartItems,
})

// To make those two function works register it using connect
export default connect(mapStateToProps, null)(CartItems)
