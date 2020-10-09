import React from 'react';
import './menu.css';

const Menu = ({portfolio, switchMainBlocktoPortfolio, switchMainBlocktoSkills}) => {
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

export default Menu;