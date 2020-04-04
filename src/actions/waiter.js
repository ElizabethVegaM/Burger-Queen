import {
  ADD_NAME, ADD_ITEM, REMOVE_ITEM, SEND_ORDER, CLEAN_ORDER,
} from './actionTypes';

export const addCustomerName = name => ({
  type: ADD_NAME,
  payload: name,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const sendOrderToKitchen = order => ({
  type: SEND_ORDER,
  payload: order,
});


export const cleanOrder = order => ({
  type: CLEAN_ORDER,
  payload: order,
});
