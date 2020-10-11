import React from 'react';
import './header.css';
import myPhoto from '../../assets/images/my_photo.jpg';
import { GrSoundcloud } from 'react-icons/gr';
import { GrMail } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="app-header d-flex">
      <div className="header-container">  
        <img src={myPhoto} alt="my_photo" id="my_photo" className="logo"></img>
        <div className="header-title-container">
          <h1 className="header-title">Artsiom Lipchyk</h1>
          <h2 className="header-title">Web & Front-end Developer</h2>
          <div className="contacts">
            <a href="https://soundcloud.com/artsky-tem/my-island/s-5Yqas" target="_blank" rel="noopener noreferrer">
              <GrSoundcloud size="30px"/>
            </a>
            <a href="mailto:tommerg09@gmail.com" target="_blank" rel="noopener noreferrer">
              <GrMail size="30px"/>
            </a>
            <a href="https://github.com/tommergz" target="_blank" rel="noopener noreferrer">
              <GrGithub size="30px"/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size="30px"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

