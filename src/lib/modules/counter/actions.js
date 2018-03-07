export default module => ({
  increase: (value = 1) => ({
    type: module.actionTypes.INCREASE,
    value,
  }),
  decrease: (value = 1) => ({
    type: module.actionTypes.DECREASE,
    value,
  }),
});