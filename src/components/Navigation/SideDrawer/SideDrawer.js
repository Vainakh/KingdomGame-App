import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import './SideDrawer.css';


const sideDrawer = () => {
  return (
    <div className={"SideDrawer"}>
      <Logo/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  )
};

export default sideDrawer;