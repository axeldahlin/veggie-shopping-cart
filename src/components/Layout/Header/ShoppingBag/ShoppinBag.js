import React, { Component } from 'react';

class ShoppingBag extends Component {



  render () {
    return (
      <div>
        <p onClick={this.props.clicked}>Shopping bag</p>
        
        
      </div>

    );
  }
}


export default ShoppingBag;