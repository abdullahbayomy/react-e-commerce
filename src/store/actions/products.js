import * as actionTypes from './actionTypes';

export const setData = (data) => {
  return {
    type: actionTypes.SET_DATA,
    loading: true,
    data: data,
  };
};

export const getProducts = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setData(data));
    }, 1000);
  };
};

export const addToCart = (productData) => {
  return {
    type: actionTypes.ADD_To_CART,
    productData: productData,
  };
};

export const inCart = (id) => {
  return {
    type: actionTypes.INCART,
    id: id,
  };
};

export const subAvalible = (id) => {
  return {
    type: actionTypes.SUBAVALIBLE,
    id: id,
  };
};
export const incAvalible = (id) => {
  return {
    type: actionTypes.INCAVALIBLE,
    id: id,
  };
};

export const initTotal = () => {
  return {
    type: actionTypes.INIT_TOTAL,
  };
};

export const totalCost = (cost) => {
  return {
    type: actionTypes.TOTALCOST,
    cost: cost,
  };
};

export const decTotalCost = (cost) => {
  return {
    type: actionTypes.DEC_TOTAL_COST,
    cost: cost,
  };
};

export const deleteItem = (id) => {
  return {
    type: actionTypes.DELETE_ITEM,
    id: id,
  };
};
