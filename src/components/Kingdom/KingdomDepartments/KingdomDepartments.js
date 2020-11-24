import React from 'react';
import './KingdomDepartments.css'

const kingdomDepartments = (props) => {
  let level = null;

  switch (props.types) {
    case ("defence"):
      level = <div className={"Defence"}></div>;
      break;
    case ("science"):
      level = (
        <div className={"Science"}>;
          <div className={"Seeds1"}></div>;
          <div className={"Seeds2"}></div>;
        </div>
      )
      break;
    case ("construction"):
      level = <div className={"Construction"}></div>;
      break;
    case ("social-services"):
      level = <div className={"Social-Services"}></div>
  }
  return ();
}

export default kingdomDepartments;