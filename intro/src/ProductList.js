import React, { Component } from 'react'
import { Table,Button } from 'reactstrap';


export default class ProductList extends Component {
    
    render() {
        return (
            <div>
                <h2>{this.props.info.title} - {this.props.currentCategory}</h2>

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr key={product.productID}>
                                    <th scope="row">{product.productID}</th>
                                    <td>{product.name}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>{product.unitPrice}</td>
                                    <td> <Button onClick={()=>{
                                        this.props.addToCart(product);
                                    }} color="info">Add To Cart</Button></td>
                                </tr>
                            )
                            )
                        }

                    </tbody>
                </Table>
            </div>
        );

    }
}
