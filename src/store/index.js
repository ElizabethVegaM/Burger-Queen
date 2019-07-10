import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import state from './initialState';

export default createStore(
  reducer,
  state,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

//composeWithDevTools permite que se visualicen los cambios de estado en la consola de redux dev tools en chrome