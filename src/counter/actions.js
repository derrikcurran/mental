import {
  INCREASE,
  DECREASE,
} from './actionTypes';

export const increase = (value = 1) => ({
  type: INCREASE,
  value,
});

export const decrease = (value = 1) => ({
  type: DECREASE,
  value,
});