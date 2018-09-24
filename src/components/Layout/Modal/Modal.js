import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const modal = ( props ) => {
  return (
    <Aux>
      <Backdrop show={props.showModal} clicked={props.closeModal}/>
      <div 
        className={classes.Modal}
        style={{
          tranform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.showModal ? '1' : '0'
        }}>
        <div>

        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
    </Aux>
  );
}
export default modal;