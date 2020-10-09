import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import ProjectList from '../project-list/project-list';
import Footer from '../footer/footer';
import projects from '../services/projects/projects';

export default class App extends Component {

  state = {
    portfolio: true,
    projects: projects
  }

  render() {
    return (
      <div className="portfolio">
        <Header />
        <ProjectList projects = {this.state.projects} />
        <Footer />
      </div>
    )
  }  
}

