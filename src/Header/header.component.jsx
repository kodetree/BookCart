import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BookList from '../Components/booklist.component'

import CartItems from '../Components/cart.component'

const Header = (props) => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Account">Account</Link>
              </li>
              <li>
                <Link to="/Cart">Cart - {props.cartItems.length}</Link>
              </li>

              <li>
                <Link to="/Sign Out">Sign Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/">
          <BookList />
        </Route>
        <Route path="/Cart">
          <CartItems />
        </Route>
      </Switch>
    </Router>
  )
}

// Get state to props
const mapStateToProps = (state) => ({
  cartItems: state.addtocart.cartItems,
})

// To make those two function works register it using connect
export default connect(mapStateToProps, null)(Header)
