import React from 'react';
import './Logo.css';
import kingdomLogo from '../../assets/images/logo.png';

const logo = (props) => (
  <div className="Logo">
    <img src={kingdomLogo} alt="MyKingdom"></img>
  </div>
)

export default logo;