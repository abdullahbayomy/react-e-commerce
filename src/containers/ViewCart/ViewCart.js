import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './ViewCart.module.css';
import CartController from '../../components/ViewProductCtr/CartController';
import * as actions from '../../store/actions/index';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Modal from '../../components/UI/Modal/Modal';

class ViewCart extends Component {
  state = {
    showModal: false,
  };
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

  showConfirmBuy = (e) => {
    e.preventDefault();
    this.setState({ showModal: !this.state.showModal });
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

          <button className={classes.Btn} onClick={this.showConfirmBuy}>
            Order now
          </button>
          <Backdrop show={this.state.showModal} clicked={this.showConfirmBuy} />
          <Modal show={this.state.showModal}>
            <div className={classes.Order}>
              <h3 className={classes.TotalCost}>
                total cost: &nbsp;{this.props.totalPrice} $
              </h3>
              <div className={classes.BtnContainer}>
                <button className={classes.Btn}>Buy it</button>
                <button
                  className={classes.BtnRed}
                  onClick={this.showConfirmBuy}
                >
                  cancel
                </button>
              </div>
            </div>
          </Modal>
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
