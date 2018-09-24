import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import classes from './Layout.css';
import ProductPage from '../../Containers/ProductPage/ProductPage';
import Modal from '../../components/Layout/Modal/Modal';

class Layout extends Component {
  state = {
    showModal: false,
  }

  openModalHandler = () => {
    console.log('hew');
    this.setState({showModal: true});
  }

  closeModalHandler = () => {
    console.log('hejjj');
    this.setState({showModal: false});
  }

  render () {
    return (
      <Aux>
        <Modal showModal={this.state.showModal} closeModal={() => {this.closeModalHandler()}}/>
        <Header open={this.openModalHandler.bind(this)}/>
        <main className={classes.Content}>
          <ProductPage />
        </main>
        <Footer />
      </Aux>
    );

  }

}
export default Layout;