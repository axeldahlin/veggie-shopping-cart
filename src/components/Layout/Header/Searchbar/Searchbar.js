import React from 'react';
import classes from './Searchbar.css';

const searchBar = ( props ) => (
  <div className={classes.SearchContainer}>
    <input onChange={props.search} placeholder="Search for fruit and veggies!"></input>
    <button>Search!</button>
  </div>

);

export default searchBar;