import { PACKAGE_NAME } from '../../constants';
import makeModule from '../../util/makeModule';

import actions from './actions';
import actionTypes from './actionTypes';
import reducer from './reducer';
import selectors from './selectors';

export default makeModule({
  packageName: PACKAGE_NAME,
  moduleName: 'counter',
  actions,
  actionTypes,
  reducer,
  selectors,
});