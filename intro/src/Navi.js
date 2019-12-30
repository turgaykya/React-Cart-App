import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom'

export default class Navi extends Component {
    render() {

        return (
            <div className="col-md-12">
                <Navbar color="light" light expand="lg">
                    <NavbarBrand href="/">Northwind App</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link to="/form1/">FormDemo1</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/form2/">FormDemo2</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}></CartSummary>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}