import React, { Component } from 'react';
import classes from './Product.css';
import Counter from '../Counter/Counter';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.clicked(this.props.id, this.state.amount);
    this.setState({amount: 0});
  }

  increse = () => {
    if (this.state.amount >= 99) return; 
    console.log('+')
    const current = this.state.amount;
    const incresedAmount = Number(current) + 1;
    this.setState({amount: incresedAmount});
  }

  decrese = () => {
    if (this.state.amount <= 0) return; 
    console.log('-')
    const current = this.state.amount;
    const decresedAmount = Number(current) - 1;
    this.setState({amount: decresedAmount});
  }

  handleAmount = (event) => {
    console.log(event.target.value)
    this.setState({amount: event.target.value});
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
          <Counter 
            change={this.handleAmount}
            currentValue={this.state.amount}
            increse={this.increse}
            decrese={this.decrese}/>
          <button type="submit" onClick={this.handleClick}>Add to cart</button>
        </div>
      </div>
    );
  }
}

export default Product;