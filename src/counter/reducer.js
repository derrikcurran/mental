import {
  INCREASE,
  DECREASE,
} from './actionTypes';

const initialState = Object.freeze({
  count: 0,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + action.value,
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - action.value,
      };
    default:
      return state;
  }
};