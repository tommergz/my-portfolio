import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import Menu from '../menu/menu';
import ProjectList from '../project-list/project-list';
import AchievementList from '../achievement-list/achievement-list';
import Footer from '../footer/footer';
import Loading from '../loading/loading';
import projects from '../services/projects';
import achievements from '../services/achievements';
import images from '../../assets/img-obj/img-obj'

export default class App extends Component {

  state = {
    portfolio: true,
    projects: projects,
    achievements: achievements,
    imagesLoaded: 0,
    showMainPage: false
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

  imagesLoading = (data) => {
    for (let key in data) {
      let newImg = new Image();
      newImg.src = data[key];
      newImg.onload = () => { 
        if (this.state.imagesLoaded === 8) {
          this.setState( (state) => ({
            imagesLoaded : state.imagesLoaded + 1,
            showMainPage: true
          }) ) 
        }
        else {
          this.setState( (state) => ({imagesLoaded : state.imagesLoaded + 1}) ) 
        }
      }
    }
  }

  componentDidMount() {
    this.imagesLoading(images)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.showMainPage !== nextState.showMainPage ||
    this.state.portfolio !== nextState.portfolio
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
    console.log('r')
    const listBlock = this.state.portfolio ? 
      <ProjectList projects = {this.state.projects} /> : 
      <AchievementList achievements = {this.state.achievements}/>;
    const allImagesLoaded = this.state.imagesLoaded === 9;
    const achivievementList = allImagesLoaded ? null : 
    <AchievementList achievements = {this.state.achievements}/>;  
    const loading = allImagesLoaded ? null : <Loading />;
    const background = allImagesLoaded ? '' : 'white-background';
    const mainPageVisibility = allImagesLoaded ? 'main-page' : 'hiden-main-page';
    return (
      <div className={background}>
        {loading}
        <div className={mainPageVisibility}>
          <Header />
          <Menu 
            portfolio = {this.state.portfolio}
            switchMainBlocktoPortfolio = {this.switchMainBlocktoPortfolio} 
            switchMainBlocktoSkills = {this.switchMainBlocktoSkills}
          />
          {listBlock}
          {achivievementList}
          <Footer />
        </div>
      </div>
    )
  }  
}
