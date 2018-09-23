import React, { Component } from 'react';
import fakeAPI from '../../assets/FakeAPI/FakeAPI'
import Product from '../../components/Product/Product';
import classes from './ProductPage.css';

class ProductPage extends Component {

  state = {
    products: [],
    testProducts: [1, 2, 3, 4],
  }

   // Fetch Initial Set of Products from external API
   getProducts() {
     const products = fakeAPI;
     this.setState({products: products});
   
  }
  componentWillMount() {
    this.getProducts();
  }
  
  render() {

    const productList = this.state.testProducts.map((prod, id) => {
      return <Product className={classes.Product}key={id} numer={prod}/>
    })

    return (
      <div className={classes.ProductContainer}>
      {productList}
      </div>

    );
  }

}
export default ProductPage;