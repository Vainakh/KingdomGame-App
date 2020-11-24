import React, {Component} from 'react';
import './KingdomDepartment.css';
import PropTypes from "prop-types";

class KingdomDepartment extends Component {
  render () {
    let level = null;
    switch (this.props.type) {
      case ("science"):
        level = <div className={"Science"}></div>;
        break;
      case ("defence"):
        level = (
          <div className={"Defence"}>
            <div className={"Seeds1"}></div>
            <div className={"Seeds2"}></div>
          </div>
        )
        break;
      case ("construction"):
        level = <div className={"Construction"}></div>;
        break;
      case ("social"):
        level = <div className={"Social"}></div>;
        break;
      case ("transportation"):
        level = <div className={"Transportation"}></div>;
        break;
      case ("health"):
        level = <div className={"Health"}></div>;
        break;
      default:
        level = null;
    }
    return level;
  }
}

KingdomDepartment.propTypes = {
  type: PropTypes.string.isRequired
}
export default KingdomDepartment;