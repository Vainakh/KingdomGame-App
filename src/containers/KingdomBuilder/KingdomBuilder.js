import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Kingdom from '../../components/Kingdom/Kingdom';

class BurgerBuilder extends Component {
  render () {
    return (
      <Aux>
        <Kingdom/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}


export default BurgerBuilder;