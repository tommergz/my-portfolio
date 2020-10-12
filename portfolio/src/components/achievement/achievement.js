import React from 'react';
import './achievement.css';
import images from '../../assets/img-obj/img-obj'

const Achievement = ({data}) => {
  const {img, technology, link} = data;
  return (
    <div className="achivement-wrapper">
      <h1>{technology}</h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={images[img]} alt="Certificate" className="certificate"></img>
      </a>            
    </div>
  )
}

export default Achievement;