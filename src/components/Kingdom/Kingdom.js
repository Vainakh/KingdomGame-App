import React from 'react';
import KingdomDepartment from './KingdomDepartment/KingdomDepartment';
import './Kingdom.css';

const kingdom = (props) => {
  let transformedLevels = Object.keys(props.levels).map(levelKey => {
    return [...Array(props.levels[levelKey])].map((_, i) => {
      return <KingdomDepartment key={levelKey + i} type={levelKey}/>
    });
  });
  console.log(transformedLevels)
  return (
    <div className={"Kingdom"}>
      <KingdomDepartment type="defence"/>
      {transformedLevels}
      <KingdomDepartment type="science"/>
    </div>
  );
};

export default kingdom;