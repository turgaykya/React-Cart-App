import React, { Component } from 'react'
import {
  DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, NavLink,
  NavItem, Badge
} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import { Link } from "react-router-dom"
import alertify from 'alertifyjs'

class CartSummary extends Component {
  removeFromCart = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.error(product.name + " Remove To Product")
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink >Your Cart is Empty.</NavLink>
      </NavItem>
    )
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {
            this.props.cart.map(cartItem => (

              <DropdownItem key={cartItem.product.productID}>
                <Badge color="danger" onClick={() => this.removeFromCart(cartItem.product)}> X </Badge>
                {cartItem.product.name}
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))
          }

          <DropdownItem divider />
          <DropdownItem><Link to="/cart">Go To Cart</Link>

          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
  render() {
    return (
      <div>
        {
          this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
        }

      </div>
    )
  }
}
function mapsStateToProps(state) {
  return {
    cart: state.cartReducer
  }
}
function mapsDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  }
}
export default connect(mapsStateToProps, mapsDispatchToProps)(CartSummary)