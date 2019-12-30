import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'
import { Table, Button } from 'reactstrap'

class CartDetail extends Component {
    removeFromCart = (product) => {
        this.props.actions.removeFromCart(product);
        alertify.error(product.name + " Remove To Product")
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr>
                                <th scope="row">{cartItem.product.productID}</th>
                                <td>{cartItem.product.name}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button onClick={() => this.removeFromCart(cartItem.product)} color="danger">Remove Item</Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
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
export default connect(mapsStateToProps, mapsDispatchToProps)(CartDetail)