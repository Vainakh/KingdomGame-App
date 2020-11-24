import React, {Component} from 'react';
import './KingdomDepartments.css';
import PropTypes from "prop-types";

class KingdomDepartments extends Component {
  render () {
    let level = null;
    switch (this.props.type) {
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
        level = <div className={"Social-Services"}></div>;
        break;
      default:
        level = null;
    }
    return level;
  }
}

KingdomDepartments.propTypes = {
  type: PropTypes.string.isRequired
}
export default KingdomDepartments;