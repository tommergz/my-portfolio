import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import Menu from '../menu/menu';
import ProjectList from '../project-list/project-list';
import Skills from '../skills/skills';
import Footer from '../footer/footer';
import projects from '../services/projects/projects';

export default class App extends Component {

  state = {
    portfolio: true,
    projects: projects
  }

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
    const mainBlock = this.state.portfolio ? <ProjectList projects = {this.state.projects} /> : <Skills />
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

