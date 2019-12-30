import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge, Table,Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'


class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }

    addToCart = (product)=>{
        this.props.actions.addToCart({quantity:1,product});
        alertify.success(product.name + " added to cart.")
    }

    render() {
        return (
            <div>
                <Badge color="warning">Products</Badge>
                <Badge color="success">{this.props.currentCategory.name}</Badge>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr>
                                <th scope="row">{product.productID}</th>
                                <td>{product.name}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                                <td>
                                <Button onClick ={()=>this.addToCart(product)}color="success">Add To Cart</Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
    //Reduxtan geliyor bu kısım State getirmek için
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart : bindActionCreators(cartActions.addToCart,dispatch)
        }
        //Redux klasörü altındaki action ile bağladık
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
