import React, { Component } from 'react';
import classes from './ViewProduct.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

class ViewProduct extends Component {
  state = {
    quantity: 1,
    vartualAvalible: 0,
    itemPrice: 0,
    itemQuantityBack: 0,
  };

  componentDidMount() {
    this.setState({ vartualAvalible: this.props.product.avalible });
  }

  increaseQuantity = () => {
    if (this.props.product.avalible) {
      this.setState((prevState) => {
        return {
          quantity: prevState.quantity + 1,
          itemPrice: prevState.itemPrice + this.props.product.price,
          itemQuantityBack: prevState.itemQuantityBack + 1,
        };
      });
      const total = this.props.product.price;
      this.props.getPrice(total);
      this.props.subAvalible(this.props.product.id);
    }
  };

  subQuantity = () => {
    if (this.props.product.counter) {
      this.setState((prevState) => {
        return {
          quantity: prevState.quantity - 1,
          itemPrice: prevState.itemPrice - this.props.product.price,
          itemQuantityBack: prevState.itemQuantityBack - 1,
        };
      });
      const total = this.props.product.price;
      this.props.decPrice(total);
      this.props.incAvalible(this.props.product.id);
    }
  };

  deleteItemHandler = () => {
    for (let i = 0; i <= this.state.itemQuantityBack; i++) {
      this.props.incAvalible(this.props.product.id);
    }
    this.props.deleteItem(this.props.product.id);
    const total = this.state.itemPrice + this.props.product.price;
    this.props.decPrice(total);
    this.props.inCart(this.props.product.id);
  };
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.ProductImg}>
          <img
            src={require('../../../assets/images/laptop/laptopimg.jpg')}
            alt='ProductImage'
          />
        </div>
        <span className={classes.ProductName}>{this.props.product.name}</span>
        <span className={classes.Price}>
          Price:&nbsp;{this.props.product.price}&nbsp;$
        </span>
        <span className={classes.Avalible}>
          avalible: &nbsp;{this.props.product.avalible}
        </span>
        <div className={classes.CartBtn} onClick={this.deleteItemHandler}>
          <IconButton color='primary'>
            <DeleteOutlineIcon />
            Delete
          </IconButton>
        </div>
        <div className={classes.QuantityContainer}>
          <div className={classes.Icon} onClick={this.increaseQuantity}>
            <AddCircleOutlineIcon className={classes.Safe} />
          </div>
          <span>+{this.props.product.counter}</span>
          <div className={classes.Icon} onClick={this.subQuantity}>
            <RemoveCircleOutlineIcon className={classes.Danger} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    subAvalible: (id) => dispatch(actions.subAvalible(id)),
    incAvalible: (id) => dispatch(actions.incAvalible(id)),
    deleteItem: (id) => dispatch(actions.deleteItem(id)),
    inCart: (id) => dispatch(actions.inCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ViewProduct);
