import React from 'react';
import './achievement-list.css';
import Achievement from '../achievement/achievement';
import listMaker from '../utils/list-maker';

const AchievementList = ({achievements}) => {
  const allAchievementsList = listMaker(achievements, Achievement);
  return <ul className="achievement-list">{allAchievementsList}</ul>
}

export default React.memo(AchievementList);