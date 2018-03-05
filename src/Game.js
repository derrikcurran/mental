import React, { Component } from 'react';

import { Counter, Crank } from './counter/components';

export default class Game extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Crank
          rotationsPerSecond={1}
          outputPerRotation={1}
        />
      </div>
    );
  }
}