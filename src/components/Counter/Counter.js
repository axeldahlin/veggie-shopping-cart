import React from 'react';
import classes from './Counter.css';


const counter = ( props ) => (
  <div className={classes.Counter}>
    <button 
      className={classes.Increse}
      onClick={props.increse}>+</button>
    <input value={props.currentValue} onChange={props.change} type="number"></input>
    <button 
      className={classes.Decrese}
      onClick={props.decrese}>-</button>
  </div>
  

);

export default counter;