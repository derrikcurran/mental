import {
  INCREMENT,
  DECREMENT,
} from './actionTypes';

const initialState = Object.freeze({
  count: 0,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};