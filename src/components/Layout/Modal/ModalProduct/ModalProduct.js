import React from 'react';
import classes from './ModalProduct.css';


const modalProduct = ( props ) => (
  <div className={classes.ModalProduct}>


    <div className={classes.ImgContainer}>
      <img src={props.image}  alt={props.name}/>
    </div>
    
    <div>
      <p>{props.name}</p>
      <p>Price: {props.price}</p>
    </div>

    <div>
      <p>Amount: {props.amount}</p>
      <p>Total: {props.price * props.amount}</p>
    </div>

    <a onClick={props.remove}>×</a>

  </div>
);
export default modalProduct;