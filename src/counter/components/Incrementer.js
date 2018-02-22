import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment } from '../actions';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Incrementer = props => {
  const {
    onClick,
  } = props;

  return (
    <button onClick={onClick}>
      Increment
    </button>
  );
};

Incrementer.propTypes = propTypes;

export default connect(null, dispatch => ({
  onClick: () => {
    dispatch(increment())
  },
}))(Incrementer);