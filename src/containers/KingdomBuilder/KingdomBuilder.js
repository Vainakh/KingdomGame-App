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

  removeLevelHandler = (type) => {
    const oldCount = this.state.levels[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedLevels = {
      ...this.state.levels
    }
    updatedLevels[type] = updatedCount;
    const costSubstruction = LEVEL_COSTS[type];
    const oldCost = this.state.totalCost;
    const newCost = oldCost + costSubstruction;
    this.setState({totalCost: newCost, levels: updatedLevels})
  }

  render () {

    const disableInfo = {
      ...this.state.levels
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Kingdom levels={this.state.levels}/>
        <BuildControls 
            levelsAdded={this.addLevelHandler} 
            levelsRemoved={this.removeLevelHandler}
            disabled={disableInfo}
            />
      </Aux>
    );
  }
}


export default KingdomBuilder;