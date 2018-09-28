import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import classes from './Layout.css';
import ProductPage from '../../Containers/ProductPage/ProductPage';
import Modal from '../../components/Layout/Modal/Modal';
import axios from 'axios';

class Layout extends Component {
  state = {
    showModal: false,
    totalAmount: 0,
    totalItems: 0,
    products: [],
    shownProducts: [],
    cart: [],
    modalCoords: 'translate(700px, 0px)',
  }

  // Fetch Initial Set of Products from external API
  getProducts() {
    axios.get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
      .then(response => {
        console.log(response.data);
        this.setState({
          products: response.data,
          shownProducts: response.data
        });
      })
   }
   componentWillMount() {
     this.getProducts();
   }

   componentDidMount() {
    
    window.addEventListener("resize", this.resizeHandler);
   }


   resizeHandler = () => {
    const img = document.querySelector('#bagImg');
    this.calculateModalPosition(img);
   }

  openModalHandler = (event) => {
    this.calculateModalPosition(event.target);
    this.setState({showModal: true});

  }

  calculateModalPosition = (img) => {
    
    const imgCoords = img.getBoundingClientRect();
    // const headerCoords = img.parentElement.parentElement.getBoundingClientRect();


    console.log(imgCoords);
    
    // 400 is the width of modal - width of image
    const modalCoords = `translate(${imgCoords.left - 400}px, ${imgCoords.top}px)`;

    

    // console.log(headerHeight);


    console.log(modalCoords);
    this.setState({modalCoords: modalCoords})

  
  }

  closeModalHandler = () => {
    this.setState({showModal: false});
  }

  addToCartHandler = (id, amount) => {
    const myVeg = this.state.products.find( (vegObj) => vegObj.id === id);
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

    let totalAmount = 0;
    let productCount = 0;
    for (let i = 0; i < prevCart.length; i++) {
      totalAmount+= (prevCart[i].price * prevCart[i].amount);
      productCount++;
    }

    this.setState({
      cart: prevCart,
      totalAmount: totalAmount,
      totalItems: productCount,
    });
  }




  removeFromCartHandler = (id) => {
    let prevCart = [...this.state.cart];
    console.log(id);

    for (let i = 0; i < prevCart.length; i++) {
      if ( prevCart[i].id === id ) {
        prevCart.splice(i, 1);
      }
    }



    let totalAmount = 0;
    let productCount = 0;
    for (let i = 0; i < prevCart.length; i++) {
      totalAmount+= prevCart[i].price;
      productCount++;
    }

    this.setState({
      cart: prevCart,
      totalAmount: totalAmount,
      totalItems: productCount,
    });
  }


  searchProductsHandler = (event) => {
    console.log(event.target.value);
    const regexp = new RegExp(event.target.value, 'gi')

    const vegsToShow = this.state.products.filter(vegetable => {
      return vegetable.name.match(regexp);
    });



    this.setState({shownProducts: vegsToShow});

    

    console.log(vegsToShow);
  }




  render () {
    return (
      <Aux>
        <Modal
          showModal={this.state.showModal}
          closeModal={() => {this.closeModalHandler()}}
          cart={this.state.cart}
          removeItem={this.removeFromCartHandler}
          coords={this.state.modalCoords}/>
          
          
        <Header 
          open={this.openModalHandler.bind(this)}
          totalAmount={this.state.totalAmount}
          totalItems={this.state.totalItems}
          searchProducts={this.searchProductsHandler}
          />
        <main className={classes.Content}>
          <ProductPage 
            products={this.state.shownProducts}
            addToCart={this.addToCartHandler}
          />
        </main>
        <Footer />
      </Aux>
    );

  }

}
export default Layout;