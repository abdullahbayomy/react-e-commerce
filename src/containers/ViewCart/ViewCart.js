import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './ViewCart.module.css';
import CartController from '../../components/ViewProductCtr/CartController';
import * as actions from '../../store/actions/index';

class ViewCart extends Component {
  componentDidMount() {
    if (!this.props.cart.length) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate() {
    if (!this.props.cart.length) {
      this.props.history.push('/');
    }
  }

  getPrice = (price) => {
    this.props.totalCost(price);
  };

  decPrice = (price) => {
    this.props.decTotalCost(price);
  };

  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Items}>
          <h3 className={classes.TotalCost}>
            total cost: &nbsp;{this.props.totalPrice} $
          </h3>
          <CartController
            products={this.props.cart}
            getPrice={this.getPrice}
            decPrice={this.decPrice}
          />

          <button className={classes.Btn}>Order now</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalPrice: state.totalCost,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    totalCost: (cost) => dispatch(actions.totalCost(cost)),
    decTotalCost: (cost) => dispatch(actions.decTotalCost(cost)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
