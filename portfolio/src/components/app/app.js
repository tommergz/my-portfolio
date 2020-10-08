import React, { Component } from 'react';
import Header from '../header/header';
import './app.css';
import projects from '../services/projects/projects'

export default class App extends Component {

  state = {
    portfolio: true,
    projects: projects
  }

  render() {
    return (
      <div className="portfolio">
        <Header />
      </div>
    )
  }  
}

