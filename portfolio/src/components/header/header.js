import React from 'react';
import './header.css';
import myPhoto from '../../assets/images/my_photo.jpg';

const Header = () => {
  return (
    <div className="app-header d-flex">
      <div className="header-container">  
        <img src={myPhoto} alt="my_photo" id="my_photo" className="logo"></img>
        <div className="header-title-container">
          <h1 className="header-title">Artsiom Lipchyk</h1>
          <h2 className="header-title">Web & Front-end Developer</h2>
          <div id="contacts" className="contacts">
            <a href="https://soundcloud.com/artsky-tem/my-island/s-5Yqas" target="_blank" rel="noopener noreferrer">Link</a>
            <a href="mailto:tommerg09@gmail.com" target="_blank" rel="noopener noreferrer">Link</a>
            <a href="https://github.com/tommergz" target="_blank" rel="noopener noreferrer">Link</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

