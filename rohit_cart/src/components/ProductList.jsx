import React from 'react'
import Product from './Product.jsx'

export default function ProductList(props) {
  return (
    props.productList.length > 0 ?
    props.productList.map((product, i) => {
      return (
        <Product 
          product={product} 
          key={i} 
          increamentQuantity={props.increamentQuantity}    
          index={i} 
          decreamentQuantity={props.decreamentQuantity}
          removeItem={props.removeItem}
        />
      );
    }) : <h1>No Products Exist in the cart</h1>
  );
}
