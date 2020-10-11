import React from 'react';
import './project.css';
import images from '../../assets/img-obj/img-obj'

const Project = ({data}) => {
  const {img, name, description, demoLink, githubLink} = data;
  return (
    <div className="project-wrapper">
      <div className="preview-container">
        <img src={images[img]} alt="Culture-Portal"></img>
      </div>
      <div className="description-container">
        <div className="description">
          <h1 className="description-title">{name}</h1>
          <p className="description-text">{description}</p>
        </div>
        <div className="description-btn-container">
          <div className="btn-container">
            <a className="btn" href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
          <div className="btn-container">
            <a className="btn" href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
