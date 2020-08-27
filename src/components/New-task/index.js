import React, { useContext } from 'react';

import './style.css'
import Button from '../Button';
import { TaskContext } from '../../contexts/TaskContext'

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