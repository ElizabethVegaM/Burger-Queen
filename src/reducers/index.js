import { combineReducers } from 'redux';
import waiter from './waiter';

export default combineReducers({
  waiter
});

// junta todos los reducers en uno usando combineReducers en un objeto unico