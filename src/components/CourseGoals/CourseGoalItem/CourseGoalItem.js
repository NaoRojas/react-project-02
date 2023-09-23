import React from 'react';

import './CourseGoalItem.css';
import { commonIcons } from '../../../data/icons'

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <div>

      <div className="goal-item" onClick={deleteHandler}>
        <span className='icon'>
          {commonIcons[Math.floor(Math.random() * commonIcons.length)]}
        </span>
        {
          props.children.charAt(0).toUpperCase() + props.children.slice(1)}
      </div>
    </div>
  );
};

export default CourseGoalItem;
