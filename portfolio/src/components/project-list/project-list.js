import React from 'react';
import './project-list.css';
import Project from '../project/project';
import listMaker from '../utils/list-maker';

const ProjectList = ({projects}) => {
  const allProjectsList = listMaker(projects, Project);
  return <ul className="project-list">{allProjectsList}</ul>
}

export default React.memo(ProjectList);