import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import './BuildControls.css';

let controls = [
  { label: 'Science', type: 'science'},
  { label: 'Defence', type: 'defence'},
  { label: 'Construction', type: 'construction'},
  { label: 'Social', type: 'social'},
  { label: 'Transportation', type: 'transportation'},
  { label: "Health" , type: 'health'}
];

const buildControls = (props) => (
  <div className={"BuildControls"}>
    <p>Current Cost: <strong>{props.costs.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          added={() => props.levelsAdded(ctrl.type)}
          removed={() => props.levelsRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
    ))}
    <button 
    className={"OrderButton"}
    disabled={!props.purchasable}
    >ADD GRAPHICS</button>
  </div>
)
  


export default buildControls; 
