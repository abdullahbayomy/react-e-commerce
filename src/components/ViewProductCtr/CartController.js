import React from 'react';
import ViewProduct from './ViewProduct/ViewProduct';

const CartController = (props) => {
  return props.products.map((product) => {
    return (
      <ViewProduct
        key={product.id}
        product={product}
        getPrice={props.getPrice}
        decPrice={props.decPrice}
      />
    );
  });
};

export default CartController;
