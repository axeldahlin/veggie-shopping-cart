import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import Modalproduct from './ModalProduct/ModalProduct';

const modal = ( props ) => {

  const cartContent = props.cart.map((item) => {
    return (
      <Modalproduct
        key={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
        amount={item.amount}
        remove={() => {props.removeItem(item.id)}}
      />
    );
  });

  

  return (
    <Aux>
      <Backdrop show={props.showModal} clicked={props.closeModal}/>
      <div 
        className={classes.Modal}
        style={{
          transform: props.showModal ? props.coords : 'translate(3000px, 200px)',
          opacity: props.showModal ? '1' : '0'
        }}>
        <div className={classes.Point}></div>
        <div className={classes.ProductsContainer}>
          {cartContent}
        </div>
        
        <button className={classes.ModalBtn}>PROCEED TO CHECKOUT</button>
      </div>
    </Aux>
  );
}
export default modal;