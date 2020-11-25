import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
  <div className="BuildControl">
    <div className={"Label"}>{props.label}</div>
    <button className={"More"}>+</button>
    <button className={"Less"}>-</button>
  </div>
)

export default buildControl; 