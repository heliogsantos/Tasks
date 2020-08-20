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
            padding="7px 20"
            bgColorName="primary"
            fontSize="14"
            color="white"
            callback={() => toggleModal(true)} 
          />
        )}
      </TaskContext.Consumer>
    </div>
  );
};


export default NewTask;