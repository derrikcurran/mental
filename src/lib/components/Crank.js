import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  rotationsPerSecond: PropTypes.number,
  outputPerRotation: PropTypes.number,
  onOutput: PropTypes.func,
};

const defaultProps = {
  rotationsPerSecond: 1,
  outputPerRotation: 1,
};

class Crank extends Component {
  constructor(props) {
    super(props);

    Object.assign(this, {
      isRunning: false,
      lastTickTime: undefined,
      frameId: undefined,
    });

    this.state = {
      degreesRotated: 0,
    };

    this.start = this.start.bind(this);
    this.tick = this.tick.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    if (!this.isRunning) {
      this.lastTickTime = window.performance.now();
      this.isRunning = true;
      this.frameId = window.requestAnimationFrame(this.tick);
    }
  }

  tick(time) {
    this.update(time - this.lastTickTime);
    this.lastTickTime = time;
    this.frameId = window.requestAnimationFrame(this.tick);
  }

  update(delta) {
    if (this.isRunning) {
      const {
        rotationsPerSecond,
        outputPerRotation,
        onOutput,
      } = this.props;
      const rotations = delta * (rotationsPerSecond / 1000);
      this.setState({
        degreesRotated: (this.state.degreesRotated + rotations * 360) % 360,
      });
      if (onOutput) {
        onOutput(rotations * outputPerRotation);
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
        crank. degrees rotated: {this.state.degreesRotated}
      </div>
    )
  }
}

Crank.propTypes = propTypes;
Crank.defaultProps = defaultProps;

export default Crank;