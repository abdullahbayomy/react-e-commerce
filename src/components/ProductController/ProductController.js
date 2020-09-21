import React from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const ProductController = (props) => {
  return props.products.map((product) => {
    return <SingleProduct key={product.id} product={product} />;
  });
};

export default ProductController;
