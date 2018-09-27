import React from 'react';
import BagImg from '../../../../assets/bag.jpg';
import classes from './ShoppinBag.css';


const shoppingBag = (props) => (

   
    
    <div className={classes.BagContainer}>
      <div >
        <p>No. of items: {props.totalItems}</p> 
        <p>Sub Total: {props.totalAmount}</p>
      </div>

      <img id="bagImg" className={classes.BagImg} src={BagImg} onClick={props.clicked} alt="img"/>

  

    
    </div>
    
  
  

  );




export default shoppingBag;