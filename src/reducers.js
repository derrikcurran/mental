import { combineReducers } from 'redux';

import {
  moneyCounter,
  widgetCounter,
} from './modules';

export default combineReducers({
  [moneyCounter.name]: moneyCounter.reducer,
  [widgetCounter.name]: widgetCounter.reducer,
});