import React from 'react';

const listMaker = (data, Component) => {
  let allProjects = [...data];
  const allProjectsList = allProjects.map((item) => {
    const {id} = item;
    return (
      <li key={id}>
        <Component
          data = {item}
        />  
      </li>
    )
  })
  return allProjectsList
}

export default listMaker;