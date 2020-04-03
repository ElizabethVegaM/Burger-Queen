import {
  ADD_NAME, ADD_ITEM, REMOVE_ITEM, SEND_ORDER, CLEAN_ORDER,
} from '../actions/actionTypes';

export default (
  // estado anterior(o inicial)
  state = {
    menu: [],
    name: '',
    order: [],
    final: {},
  },
  action,
) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        order: state.order.concat(action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        order: state.order.filter(element => element !== action.payload),
      };
    case SEND_ORDER:
      return {
        ...state,
        final: action.payload,
      };
    case CLEAN_ORDER:
      return {
        ...state,
        name: '',
        order: [],
        final: {},
      };
    // siempre se debe tener un default para todos aquellos casos que no están incluidos
    default: return state;
  }
};
