import makeModule from '../../util/makeModule';

import actions from './actions';
import actionTypes from './actionTypes';
import reducer from './reducer';
import selectors from './selectors';

export default makeModule({
  packageName: 'mental',
  moduleName: 'counter',
  actions,
  actionTypes,
  reducer,
  selectors,
});