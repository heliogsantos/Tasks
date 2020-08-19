import React from 'react';

import './style.css'
import { TaskContext } from '../../contexts/TaskContext';

const NewTask = props => {

  const handleOpenModal = (toggleModal, event) => {
    toggleModal(true)
    event.stopPropagation()
  }

  return (
    <div>
      <TaskContext.Consumer>
        {({toggleModal}) => (
          <button className="btn btn-primary" onClick={(event) => handleOpenModal(toggleModal, event)}>novo</button>
        )}
      </TaskContext.Consumer>
    </div>
  );
};


export default NewTask;