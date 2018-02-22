import React, { Component } from 'react';

import { Counter, Incrementer } from './counter/components';

export default class Game extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Incrementer />
      </div>
    );
  }
}