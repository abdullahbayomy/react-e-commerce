import React, { Component } from 'react';
import classes from './SingleProduct.module.css';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class SingleProduct extends Component {
  state = {
    addedToCart: false,
  };

  addedToCart = () => {
    this.props.inCart(this.props.product.id);
    this.props.addToCart(this.props.product);
    this.props.subAvalible(this.props.product.id);
    this.props.initTotal();
    this.setState({
      addedToCart: !this.state.addedToCart,
    });
  };

  render() {
    // console.log(this.props.cart);
    // console.log(this.state.inCart);
    return (
      <div className={classes.Container}>
        <div className={classes.ProductImg}>
          <img
            src={require('../../../assets/images/laptop/laptopimg.jpg')}
            alt='ProductImage'
          />
        </div>
        <span className={classes.ProductName}>{this.props.product.name}</span>
        <span>{this.props.product.category}</span>
        <span className={classes.Price}>
          Price:&nbsp;{this.props.product.price}&nbsp;$
        </span>
        <span className={classes.Avalible}>
          avalible: &nbsp;{this.props.product.avalible}
        </span>
        {!this.props.product.inCart ? (
          <div className={classes.CartBtn} onClick={() => this.addedToCart()}>
            <IconButton color='primary' aria-label='add to shopping cart'>
              Cart+ &nbsp;
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        ) : (
          <div className={classes.CartBtn}>
            <Link to='/viewcart'>
              <IconButton variant='contained'>
                view cart <ArrowForwardIcon />
              </IconButton>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productData) => dispatch(actions.addToCart(productData)),
    inCart: (id) => dispatch(actions.inCart(id)),
    subAvalible: (id) => dispatch(actions.subAvalible(id)),
    initTotal: () => dispatch(actions.initTotal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
