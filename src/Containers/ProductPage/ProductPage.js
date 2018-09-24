import React, { Component } from 'react';
import fakeAPI from '../../assets/FakeAPI/FakeAPI'
import Product from '../../components/Product/Product';
import classes from './ProductPage.css';

class ProductPage extends Component {

  state = {
    products: [],
    cart: [],
    totalItems: 0,
    totalAmount: 0,
    showModal: false
  }

   // Fetch Initial Set of Products from external API
   getProducts() {
     const products = fakeAPI;
     this.setState({products: products});
   
  }
  componentWillMount() {
    this.getProducts();
  }

  addToCartHandler = (id) => {
    console.log('add to cart handler');
    console.log(id);
  }
  
  render() {

    const productList = this.state.products.map((product) => {
      return <Product
        key={product.id}
        name={product.name}
        price={product.price}
        imageSrc={product.image}
        clicked={() => {this.addToCartHandler(product.id)}}/>
    })

    return (
      <div className={classes.ProductContainer}>
      {productList}
      </div>

    );
  }

}
export default ProductPage;