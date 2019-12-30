import React, { Component } from 'react'
import  {Link} from "react-router-dom";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                   
                    {this.props.cart.map(cartItem => (
                         
                        <DropdownItem key={cartItem.product.productID}>
                            <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
                            {cartItem.product.name} -
                                <Badge> {cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))}
                    <DropdownItem>
                        <Link to="cart">Go To Cart</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )

    }
    renderEmpty(){
        return(
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }

    render() {

        return (
            <div>
                {this.props.cart.length>0?this.renderSummary():this.renderEmpty()}
            </div>
        )
    }
}
