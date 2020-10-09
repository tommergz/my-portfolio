import React from 'react';
import './project-list.css';
import Project from '../project/project';

const ProjectList = ({projects}) => {
  let allProjects = [...projects];
  const allProjectsList = allProjects.map((item) => {
    const {id, img, name, description, demoLink, githubLink} = item;
    return (
      <li key={id}>
        <Project
          id = {id}
          img = {img}
          name = {name}
          description = {description}
          demoLink = {demoLink}
          githubLink = {githubLink}
        />  
      </li>
    )
  })
  return <ul className="project-list">{allProjectsList}</ul>
}

export default ProjectList;