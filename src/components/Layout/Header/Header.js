import React from 'react';
import classes from './Header.css';
import SearchBar from './Searchbar/Searchbar';
import ShoppingBag from './ShoppingBag/ShoppinBag';

const header = ( props ) => (

  <header className={classes.Header}>
    <h1>Veggie</h1>
    <SearchBar />
    <ShoppingBag clicked={props.open}/>


  </header>


);
export default header;