import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: null,
  loading: false,
  cart: [],
  totalCost: 0,
  first: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        products: action.data,
        loading: action.loading,
      };
    case actionTypes.ADD_To_CART:
      return {
        ...state,
        cart: state.cart.concat(action.productData),
      };
    case actionTypes.INCART:
      const newStatus = state.products.filter((product) => {
        if (product.id === action.id) {
          product.inCart = !product.inCart;
        }
        return product;
      });
      return {
        ...state,
        products: newStatus,
      };
    case actionTypes.SUBAVALIBLE:
      const newCart = state.cart.filter((crt) => {
        if (crt.id === action.id && crt.avalible !== 0) {
          crt.avalible -= 1;
          crt.counter += 1;
        }
        return crt;
      });
      return {
        ...state,
        cart: newCart,
      };
    case actionTypes.INCAVALIBLE:
      const reCart = state.cart.filter((crt) => {
        if (crt.id === action.id && crt.counter !== 0) {
          crt.avalible += 1;
          crt.counter -= 1;
        }
        return crt;
      });
      return {
        ...state,
        cart: reCart,
      };
    case actionTypes.INIT_TOTAL:
      let sum = 0;
      for (let i = 0; i < state.cart.length; i++) {
        sum += state.cart[i].price;
      }
      return {
        ...state,
        totalCost: sum,
      };
    case actionTypes.DELETE_ITEM:
      const newItem = state.cart.filter((ctr) => ctr.id !== action.id);
      return {
        ...state,
        cart: newItem,
      };
    case actionTypes.TOTALCOST:
      return {
        ...state,
        totalCost: state.totalCost + action.cost,
      };
    case actionTypes.DEC_TOTAL_COST:
      return {
        ...state,
        totalCost: state.totalCost - action.cost,
      };

    default:
      return state;
  }
};

export default reducer;
