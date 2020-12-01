import React from 'react';
import Aux from '../../../hoc/Aux';


const orderSummary = (props) => {
  const levelsSummary = Object.keys(props.levels).map(levelKey => {
    return (
      <li key={levelKey}>
        <p><span style={{textTransform: "capitalized"}}>{levelKey}</span>:{props.levels[levelKey]}</p>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A beautiful canvas with the following elements: </p>
      <ul>
        {levelsSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  )
};


export default orderSummary;