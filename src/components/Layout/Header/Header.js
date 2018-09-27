import React from 'react';
import classes from './Header.css';
import SearchBar from './Searchbar/Searchbar';
import ShoppingBag from './ShoppingBag/ShoppinBag';

const header = ( props ) => (

  <header className={classes.Header}>
    <div className={classes.Container}>
      <h1>Veggie</h1>
      <SearchBar search={props.searchProducts}/>

      <ShoppingBag 
        clicked={props.open}
        totalItems={props.totalItems}
        totalAmount={props.totalAmount}/>

    </div>
  </header>


);
export default header;