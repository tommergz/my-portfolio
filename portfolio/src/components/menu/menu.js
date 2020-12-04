import React, { Component } from 'react';
import './menu.css';

export default class Menu extends Component {

  render() {
    const {portfolio, switchMainBlocktoPortfolio, switchMainBlocktoSkills} = this.props;
    const portfolioLampClass = portfolio ? 'lamp lighting' : 'lamp'; 
    const skillsLampClass = portfolio ? 'lamp' : 'lamp lighting';
    return (
      <div className="menu">
        <button className="choose-btn" onClick={switchMainBlocktoPortfolio}>
          <span>Portfolio</span>
          <div className={portfolioLampClass}></div>
        </button>
        <button className="choose-btn" onClick={switchMainBlocktoSkills}>
        <span>Experience</span>
          <div className={skillsLampClass}></div>
        </button>
      </div>   
    )
  }
}
