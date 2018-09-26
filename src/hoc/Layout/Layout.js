import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import classes from './Layout.css';
import ProductPage from '../../Containers/ProductPage/ProductPage';
import Modal from '../../components/Layout/Modal/Modal';
import fakeAPI from '../../assets/FakeAPI/FakeAPI';

class Layout extends Component {
  state = {
    showModal: false,
    totalAmount: 0,
    totalItems: 0,
    products: [],
    cart: [],
  }

  // Fetch Initial Set of Products from external API
  getProducts() {
    const products = fakeAPI;
    this.setState({products: products});
  
   }
   componentWillMount() {
     this.getProducts();
   }

  openModalHandler = () => {
    console.log('hew');
    this.setState({showModal: true});
  }

  closeModalHandler = () => {
    console.log('hejjj');
    this.setState({showModal: false});
  }



  addToCartHandler = (id, amount) => {
  

    if (amount <= 0) return;



    const myVeg = fakeAPI.find( (vegObj) => vegObj.id === id);
    let prevCart = [...this.state.cart];


    // Check if veg is alreday in bag if so get index
    let isInCart = false;
    let index;
    for (let i = 0; i < prevCart.length; i++) {
      if ( prevCart[i].id === id ) {
        isInCart = true;
        index = i;
      }
    }


    // add to cart or increse amount
    if (isInCart) {
      prevCart[index].amount+= amount;
      console.log('increse amount');
    } else {
      myVeg['amount'] = amount;
      prevCart.push(myVeg);
      console.log('add new');
    }

    this.setState({cart: prevCart});


  }

  render () {
    return (
      <Aux>
        <Modal showModal={this.state.showModal} closeModal={() => {this.closeModalHandler()}}/>
        <Header open={this.openModalHandler.bind(this)}/>
        <main className={classes.Content}>
          <ProductPage 
            products={this.state.products}
            addToCart={this.addToCartHandler}
          />
        </main>
        <Footer />
      </Aux>
    );

  }

}
export default Layout;