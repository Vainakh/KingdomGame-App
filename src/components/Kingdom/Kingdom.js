import React from 'react';
import KingdomDepartments from './KingdomDepartments/KingdomDepartments';
import './Kingdom.css';

const kingdom = (props) => {
  return (
    <div className="Kingdom">
      <KingdomDepartments type="Defence"/>
      <KingdomDepartments type="Science"/>
      <KingdomDepartments type="Construction"/>
      <KingdomDepartments type="Social-Services"/>
    </div>
  );
};

export default kingdom;