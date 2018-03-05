import React, { Component } from 'react';

import { Counter, Crank } from './counter/components';

export default class Game extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Crank
          revolutionsPerSecond={1}
          outputPerRevolution={1}
        />
      </div>
    );
  }
}