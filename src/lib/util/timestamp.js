export default () => window.performance ?
  window.performance.now() :
  new Date().getTime();