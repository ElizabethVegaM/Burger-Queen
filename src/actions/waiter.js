import {
  ADD_NAME, ADD_ITEM, REMOVE_ITEM, SEND_ORDER, CLEAN_ORDER,
} from './actionTypes';


export const addCustomerName = name => ({
  type: ADD_NAME,
  payload: name,
});

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
