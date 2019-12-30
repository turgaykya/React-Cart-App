import React, { Component } from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import alertify from "alertifyjs";
import { Switch, Route } from 'react-router-dom';
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }

  componentDidMount() {
    this.getProducts();//Render et
  }
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.productID == product.productID);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });

    }
    this.setState({ cart: newCart });
    alertify.success(product.name + " added to cart!", 2);
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.productID !== product.productID);
    this.setState({ cart: newCart });
    alertify.error(product.name + " remove to cart!",2);
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.name });
    this.getProducts(category.categoryID);//Tetiklemek için burada kullanabiliriz.
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryID=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        products: data
      }));
  }

  render() {
    let productInfo = {
      title: "Product List"
    }
    let categoryInfo = {
      title: "Category List"
    }

    return (
      <div>
        <Container>
          <Row>
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}></Navi>
          </Row>
          <Row>
            <Col xs="3">

              <CategoryList info={categoryInfo}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props => (
                  <ProductList
                    {...props}
                    info={productInfo}
                    currentCategory={this.state.currentCategory}
                    products={this.state.products}
                    addToCart={this.addToCart}></ProductList>
                )} />
                <Route exact path="/cart" render={props => (
                  <CartList
                    {...props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}></CartList>
                )} />
                <Route path="/form1" component={FormDemo1}/>
                <Route path="/form2" component={FormDemo2}/>
                <Route component={NotFound} />
              </Switch>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}
