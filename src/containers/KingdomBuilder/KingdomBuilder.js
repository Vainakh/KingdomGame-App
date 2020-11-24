import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Kingdom from '../../components/Kingdom/Kingdom';

class KingdomBuilder extends Component {
  state = {
    levels: {
      defence: 0,
      science: 0,
      construction: 0,
      social: 0,
      transportation: 0,
      health: 0
    }
  }
  render () {
    return (
      <Aux>
        <Kingdom levels={this.state.levels}/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}


export default KingdomBuilder;