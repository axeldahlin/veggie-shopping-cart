import React from 'react';
import Product from '../../components/Product/Product';
import classes from './ProductPage.css';

const productPage = (props) => {
  let productList = props.products.map((product) => {
    return <Product
      id={product.id}
      key={product.id}
      name={product.name}
      price={product.price}
      imageSrc={product.image}
      clicked={props.addToCart}/>
  });

  return (
    <div className={classes.ProductContainer}>
    {productList}
    </div>
  );
}

export default productPage;