import React, { Component } from 'react';
import { connect } from 'react-redux';
import { data } from '../../productData';
import ProductController from '../../components/ProductController/ProductController';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import classes from './Products.module.css';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxilliary';
import Spinner from '../../components/UI/Spinner/Spinner';

class Products extends Component {
  componentDidMount() {
    this.props.getProductData(data);
  }

  render() {
    console.log(this.props.cart);
    return (
      <div className={classes.Container}>
        {this.props.loading ? (
          <Aux>
            <div className={classes.ViewCart}>
              <Link to='/viewcart'>
                <Button variant='contained' color='secondary'>
                  View cart&nbsp;
                  <AddShoppingCartIcon />
                </Button>
              </Link>
            </div>
            <div className={classes.ContainerProduct}>
              <ProductController products={this.props.products} />
            </div>
          </Aux>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductData: (data) => dispatch(actions.getProducts(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
