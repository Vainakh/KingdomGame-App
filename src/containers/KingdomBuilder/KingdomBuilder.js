import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Kingdom from '../../components/Kingdom/Kingdom';
import BuildControls from '../../components/Kingdom/BuildControls/BuildControls';

const LEVEL_COSTS = {
  defence: 1.5,
  science: 1.4,
  construction: 1.3,
  social: 1.2,
  transportation: 1.1,
  health: 1
}

class KingdomBuilder extends Component {
  state = {
    levels: {
      defence: 0,
      science: 0,
      construction: 0,
      social: 0,
      transportation: 0,
      health: 0
    },
    totalCost: 0
  }

  addLevelHandler = (type) => {
    const oldCount = this.state.levels[type];
    const updatedCount = oldCount + 1;
    const updatedLevels = {
      ...this.state.levels
    }
    updatedLevels[type] = updatedCount;
    const costAddition = LEVEL_COSTS[type];
    const oldCosts = this.state.totalCost;
    const newCost = oldCosts + costAddition;
    this.setState( {totalCost: newCost, levels: updatedLevels})
  }

  render () {
    return (
      <Aux>
        <Kingdom levels={this.state.levels}/>
        <BuildControls levelsAdded={this.addLevelHandler}/>
      </Aux>
    );
  }
}


export default KingdomBuilder;