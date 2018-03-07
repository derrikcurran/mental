import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Counter, Crank } from './lib/components';

import {
  moneyCounter,
  widgetCounter,
} from './modules';

const propTypes = {
  moneyCount: PropTypes.number,
  increaseMoney: PropTypes.func,
  widgetCount: PropTypes.number,
  increaseWidgets: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  moneyCount: moneyCounter.selectors.getCount,
  widgetCount: widgetCounter.selectors.getCount,
});

const mapDispatchToProps = dispatch => ({
  increaseMoney: amount => dispatch(moneyCounter.actions.increase(amount)),
  increaseWidgets: amount => dispatch(widgetCounter.actions.increase(amount)),
});

class Game extends Component {
  render() {
    const {
      moneyCount,
      increaseMoney,
      widgetCount,
      increaseWidgets,
    } = this.props;

    return (
      <div>
        <h1>Money</h1>
        <Counter count={moneyCount} />
        <Crank
          rotationsPerSecond={1}
          outputPerRotation={1}
          onOutput={increaseMoney}
        />
        <hr />
        <h1>Widgets</h1>
        <Counter count={widgetCount} />
        <Crank
          rotationsPerSecond={1}
          outputPerRotation={1}
          onOutput={increaseWidgets}
        />
      </div>
    );
  }
}

Game.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Game);