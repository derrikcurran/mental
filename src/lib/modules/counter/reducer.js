const initialState = Object.freeze({
  count: 0,
});

export default (state = initialState, action, module) => {
  switch (action.type) {
    case module.actionTypes.INCREASE:
      return {
        ...state,
        count: state.count + action.value,
      };
    case module.actionTypes.DECREASE:
      return {
        ...state,
        count: state.count - action.value,
      };
    default:
      return state;
  }
};