import React from 'react';

import './style.css'
import { TaskContext } from '../../contexts/TaskContext';
import Button from '../Button';

const NewTask = props => {
  return (
    <div>
      <TaskContext.Consumer>
        {({toggleModal}) => (
          <Button
            text="novo" 
            bgColorName="primary"
            fontSize="14"
            callback={() => toggleModal(true)} 
          />
        )}
      </TaskContext.Consumer>
    </div>
  );
};


export default NewTask;