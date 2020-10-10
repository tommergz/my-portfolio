import React from 'react';
import './project-list.css';
import Project from '../project/project';
import listMaker from '../utils/list-maker';

const ProjectList = ({projects}) => {
  // let allProjects = [...projects];
  // const allProjectsList = allProjects.map((item) => {
  //   const {id, img, name, description, demoLink, githubLink} = item;
  //   return (
  //     <li key={id}>
  //       <Project
  //         img = {img}
  //         name = {name}
  //         description = {description}
  //         demoLink = {demoLink}
  //         githubLink = {githubLink}
  //       />  
  //     </li>
  //   )
  // })
  const allProjectsList = listMaker(projects, Project);
  return <ul className="project-list">{allProjectsList}</ul>
}

export default ProjectList;