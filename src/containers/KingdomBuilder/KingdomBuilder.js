import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Kingdom from '../../components/Kingdom/Kingdom';
import BuildControls from '../../components/Kingdom/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Kingdom/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



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
    totalCost: 0,
    purchasable: false,
    purchasing: false,
    loading: false
  }
  updatePurchaseState = (levels) => {
    const sum = Object.keys(levels).map((levelKey) => {
      return levels[levelKey];
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({purchasable: sum > 0})
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
    this.setState( {totalCost: newCost, levels: updatedLevels});
    this.updatePurchaseState(updatedLevels)
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
    const newCost = oldCost - costSubstruction;
    this.setState({totalCost: newCost, levels: updatedLevels})
    this.updatePurchaseState(updatedLevels)
  }
  purchaseHandler = () => {
    this.setState({purchasing: true})
  };
  purchaseCancelHandler = () => {
    this.setState({purchasing: false, totalCost: 0})
  };
  purchaseContinueHandler = () => {
    this.setState({loading: true})
    const order =  {
      levels: this.state.levels,
      costs: this.state.totalCost,
      customer: {
        name: "Adlan",
        address: {
          street: "California Street",
          zipCode: "94108",
          country: "USA"
        },
        email: "test@test.com"
      },
      deliveryMethod: "Fastest"
    }
    axios.post("/orders", order)
         .then(response => {
          this.setState({loading: false, purchasing: false});
          console.log(response);
         })
         .catch(error => {
          this.setState({loading: false, purchasing: false});
         })
  }
  render () {
    const disabledInfo = {
      ...this.state.levels
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = 
      <OrderSummary 
        levels={this.state.levels}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        cost={this.state.totalCost}
      />
    if (this.state.loading) {
      orderSummary = <Spinner/>
    }
    return (
      <Aux>
        <Modal 
            show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Kingdom levels={this.state.levels}/>
        <BuildControls 
            levelsAdded={this.addLevelHandler} 
            levelsRemoved={this.removeLevelHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            costs={this.state.totalCost}
            />
      </Aux>
    );
  }
}

export default withErrorHandler(KingdomBuilder, axios);;