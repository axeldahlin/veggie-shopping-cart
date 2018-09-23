import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import classes from './Layout.css';

class Layout extends Component {
  render () {
    return (
      <Aux>
        <Header />
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <Footer />
      </Aux>
    );

  }

}
export default Layout;