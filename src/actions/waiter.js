import axios from 'axios';
import {
  GET_MENU, ADD_NAME, ADD_ITEM, REMOVE_ITEM, SEND_ORDER, CLEAN_ORDER,
} from './actionTypes';

export const getMenu = dispatch => () => {
  axios.get('./menu.json')
    .then((res) => {
      dispatch({
        type: GET_MENU,
        payload: res.data,
      });
    })
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));
};

export const addCustomerName = dispatch => (name) => {
  dispatch({
    type: ADD_NAME,
    payload: name,
  });
};

export const addItem = dispatch => (item) => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};

export const removeItem = dispatch => (item) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: item,
  });
};

export const sendOrderToKitchen = dispatch => (order) => {
  dispatch({
    type: SEND_ORDER,
    payload: order,
  });
};

export const cleanOrder = dispatch => (order) => {
  dispatch({
    type: CLEAN_ORDER,
    payload: order,
  });
};

// se deben utilizar funciones puras
// (que solo hacen una cosa y no dependen del ambiente en que están)
// dispatch es una f(x) de redux que avisa que se está terminando una acción determinada
