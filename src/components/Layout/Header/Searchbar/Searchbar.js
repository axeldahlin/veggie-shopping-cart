import React from 'react';

const searchBar = ( props ) => (
  <div>
    <input onChange={props.search}></input>
    <button>Search!</button>
  </div>

);

export default searchBar;