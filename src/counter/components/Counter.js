import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getCount } from '../selectors';

const propTypes = {
  count: PropTypes.number,
};

const defaultProps = {
  count: 0,
};

const Counter = props => {
  const {
    count,
  } = props;

  return (
    <div>
      {count}
    </div>
  );
};

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default connect(
  createStructuredSelector({
    count: getCount,
  })
)(Counter);