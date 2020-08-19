import React from 'react';

import './style.css'

export default props => {
  return (
      <div className="list-header">
        <div className="title">
          <div className="size-tasks">{`(${props.sizeTask})`}</div>
          <h2>{props.title}</h2>
          <div className="label" style={{ background: props.labelColor }}></div>
      </div>
    </div>
  );
};