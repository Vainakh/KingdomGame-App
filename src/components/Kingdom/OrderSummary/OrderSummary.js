import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
// import './OrderSummary.css';

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
      <p><strong>Total Cost: {props.cost}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnColor={"Danger"} clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnColor={"Success"} clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
};


export default orderSummary;