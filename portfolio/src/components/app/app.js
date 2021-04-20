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
    imagesLoaded: 0,
    showMainPage: false,
    portfolio: true
  }

  imagesLoading = (data) => {
    for (let key in data) {
      const newImg = new Image();
      newImg.src = data[key];
      newImg.onload = () => { 
        if (this.state.imagesLoaded === 11) {
          this.setState({
            showMainPage: true
          })  
        }
        else {
          this.setState( (state) => ({imagesLoaded : state.imagesLoaded + 1}) ) 
        }
      }
    }
  }

  componentDidMount() {
    if (localStorage.getItem("tommergState")) {
      const localStorageState = JSON.parse(localStorage.getItem("tommergState"));
      this.setState({
        portfolio: localStorageState.portfolio,
      })
    }
    this.imagesLoading(images)
  }

  componentDidUpdate() {
    localStorage.setItem("tommergState", JSON.stringify(this.state));
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
    const portfolio = this.state.portfolio;
    const allImagesLoaded = this.state.showMainPage;
    const loading = allImagesLoaded ? null : <Loading />;
    const mainPageVisibility = allImagesLoaded ? 'main-page' : 'hiden-page';
    const contentVisibility = allImagesLoaded ? 'visible' : 'invisible';
    const portfolioBlockVisibility = allImagesLoaded && portfolio ? 'visible-block' : 'hiden-page';
    const skillsBlockVisibility = allImagesLoaded && !portfolio ? 'visible-block' : 'hiden-page';
    return (
      <div>
        {loading}
        <div className={mainPageVisibility}>
          <Header />
          <Menu 
            portfolio={this.state.portfolio}
            switchMainBlocktoPortfolio={this.switchMainBlocktoPortfolio} 
            switchMainBlocktoSkills={this.switchMainBlocktoSkills}
          />
          <div className={contentVisibility}>
            <div className={portfolioBlockVisibility}>
              <ProjectList projects={projects} />
            </div>
            <div className={skillsBlockVisibility} >
              <AchievementList achievements={achievements} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }  
}
