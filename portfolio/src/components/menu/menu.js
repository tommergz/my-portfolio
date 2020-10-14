import React, { Component } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

export default class Menu extends Component {

  state = {
    portfolio: true
  }

  switchMainBlocktoSkills = () => {
    this.setState({
      portfolio: false
    })
  }

  switchMainBlocktoPortfolio = () => {
    this.setState({
      portfolio: true
    })
  }
  
  render() {
    const portfolioLampClass = this.state.portfolio ? 'lamp lighting' : 'lamp'; 
    const skillsLampClass = this.state.portfolio ? 'lamp' : 'lamp lighting';
    return (
      <div className="menu">
        <Link className="link" to="/">
          <button className="choose-btn" onClick={this.switchMainBlocktoPortfolio}>
            <span>Portfolio</span>
            <div className={portfolioLampClass}></div>
          </button>
        </Link>
        <Link className="link" to="/achievements">
          <button className="choose-btn" onClick={this.switchMainBlocktoSkills}>
          <span>Experience</span>
            <div className={skillsLampClass}></div>
          </button>
        </Link>  
      </div>   
    )
  }
}
