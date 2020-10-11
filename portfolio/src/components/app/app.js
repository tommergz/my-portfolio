import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import Menu from '../menu/menu';
import ProjectList from '../project-list/project-list';
import AchievementList from '../achievement-list/achievement-list';
import Footer from '../footer/footer';
import projects from '../services/projects';
import achievements from '../services/achievements';

export default class App extends Component {

  state = {
    portfolio: true,
    projects: projects,
    achievements: achievements
  }
  
  // componentDidMount() { 
  //   if (localStorage.getItem("tommergState")) {
  //     const localStorageState = JSON.parse(localStorage.getItem("tommergState"));
  //     this.setState({
  //       portfolio: localStorageState.portfolio,
  //       projects: localStorageState.projects,
  //       achievements: localStorageState.achievements
  //     })
  //   }
  // }

  // componentDidUpdate() {
  //   localStorage.setItem("tommergState", JSON.stringify(this.state));
  // }

  switchMainBlocktoPortfolio = () => {
    this.setState({
      portfolio: true
    })
  }

  switchMainBlocktoSkills = () => {
    this.setState({
      portfolio: false
    })
  }

  render() {
    const mainBlock = this.state.portfolio ? 
      <ProjectList projects = {this.state.projects} /> : 
      <AchievementList achievements = {this.state.achievements}/>
    return (
      <div className="portfolio">
        <Header />
        <Menu 
          portfolio = {this.state.portfolio}
          switchMainBlocktoPortfolio = {this.switchMainBlocktoPortfolio} 
          switchMainBlocktoSkills = {this.switchMainBlocktoSkills}
        />
        {mainBlock}
        <Footer />
      </div>
    )
  }  
}

