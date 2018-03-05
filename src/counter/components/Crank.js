import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increase } from '../actions';

const propTypes = {
  revolutionsPerSecond: PropTypes.number,
  outputPerRevolution: PropTypes.number,
  onOutput: PropTypes.func,
};

const defaultProps = {
  revolutionsPerSecond: 1,
  outputPerRevolution: 1,
};

class Crank extends Component {
  constructor(props) {
    super(props);

    Object.assign(this, {
      isRunning: false,
      startTime: undefined,
      frameId: undefined,
    });

    this.start = this.start.bind(this);
    this.tick = this.tick.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    if (!this.isRunning) {
      this.startTime = window.performance.now();
      this.isRunning = true;
      this.frameId = window.requestAnimationFrame(this.tick);
    }
  }

  tick(timestamp) {
    this.update(timestamp - this.startTime);
    this.frameId = window.requestAnimationFrame(this.tick);
  }

  update(delta) {
    if (this.isRunning) {
      const {
        revolutionsPerSecond,
        outputPerRevolution,
        onOutput,
      } = this.props;
      if (onOutput) {
        const revolutions = delta * (revolutionsPerSecond / 1000);
        onOutput(revolutions * outputPerRevolution);
      }
    }
  }

  stop() {
    window.cancelAnimationFrame(this.frameId);
    this.isRunning = false;
  }

  render() {
    return (
      <div onMouseDown={this.start} onMouseUp={this.stop} onMouseLeave={this.stop}>
        crank
      </div>
    )
  }
}

Crank.propTypes = propTypes;
Crank.defaultProps = defaultProps;

export default connect(null, dispatch => ({
  onOutput: output => {
    dispatch(increase(output))
  },
}))(Crank);