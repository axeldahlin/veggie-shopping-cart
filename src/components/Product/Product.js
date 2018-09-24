import React, { Component } from 'react';
import classes from './Product.css';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick = () => {
    console.log('arg');

  }

  render() {
    const imgSrc = this.props.imageSrc;

    return (
      <div className={classes.Product}>
        <div className={classes.ImgWrap}>
          <img src={imgSrc} alt={this.props.name}/>
        </div>
        <div className={classes.ProductContainer}>
          <p>{this.props.name}</p>
          <p>Price: {this.props.price}</p>
          <input value={this.state.amount} onChange={this.handleAmount}/>
          <button type="submit" onClick={this.handleClick}>Add to cart</button>
  
        </div>
        
  
      </div>
    );

  }
}


export default Product;