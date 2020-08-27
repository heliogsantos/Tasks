import React, { useContext } from 'react';

import './style.css'
import { TaskContext } from '../../contexts/TaskContext';
import { darkModeText, darkModeMenu } from '../../utils/dark-mode'

export default props => {

  const context = useContext(TaskContext)

  return (
      <div className="list-header">
        <div className="title" style={darkModeText(context)}>
          <div className="size-tasks">{`(${props.sizeTask})`}</div>
          <h2>{props.title}</h2>
          <div className="label" style={{ background: props.labelColor }}></div>
      </div>
    </div>
  );
};