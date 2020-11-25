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
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          added={() => props.levelsAdded(ctrl.type)}
          removed={() => props.levelsRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
    ))}
  </div>
)
  


export default buildControls; 
