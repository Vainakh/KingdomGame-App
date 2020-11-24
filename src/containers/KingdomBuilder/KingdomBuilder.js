import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Kingdom from '../../components/Kingdom/Kingdom';

class KingdomBuilder extends Component {
  state = {
    levels: {
      // defence: 1,
      // science: 1,
      construction: 1,
      social: 1,
      transportation: 1,
      health: 1
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