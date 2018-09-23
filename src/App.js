import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import ProductPage from './Containers/ProductPage/ProductPage';

class App extends Component {
  render() {
    return (
     <Layout>
       <ProductPage />
     </Layout>
    );
  }
}

export default App;
