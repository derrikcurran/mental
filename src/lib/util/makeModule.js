const defaultConfig = Object.freeze({
  packageName: '',
  moduleName: '',
  actionTypes: [],
  actions: () => ({}),
  reducer: state => state,
  selectors: {},
});

export default function makeModule(moduleConfig) {
  return function(instanceName) {
    const config = Object.assign({}, defaultConfig, moduleConfig);

    const name = [
      config.packageName,
      config.moduleName,
      instanceName,
    ].filter(n => n).join('.');

    const module = {
      ...config,
      name,
      actionTypes: config.actionTypes.reduce((actionTypes, actionType) => {
        return Object.assign(actionTypes, { [actionType]: `${name}.${actionType}` });
      }, {}),
    };

    return Object.assign(module, {
      actions: config.actions(module),
      reducer: (state, action) => config.reducer(state, action, module),
      selectors: Object.keys(config.selectors)
        .reduce((selectors, selectorKey) => Object.assign(selectors, {
          [selectorKey]: state => config.selectors[selectorKey](state[name]),
        }), {}),
    });
  }
}