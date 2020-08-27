import React, { useContext } from 'react';

import './style.css';
import Task from '../Task';
import Doing from '../Doing';
import Done from '../Done';
import Modal from '../Modal'
import { TaskContext } from '../../contexts/TaskContext';
import { darkModeContent } from '../../utils/dark-mode'

const Board = () => {

  const context = useContext(TaskContext)
  
  const darkMode = context.darkMode ? darkModeContent(context) : false
  
  const styleScroll = {
    overflow: context.openModal ? 'hidden' : false,
    ...darkMode
  }

  return (
    <TaskContext.Consumer>
      {({toggleModal}) => (
        <div className="board container" onClick={() => toggleModal(false)} style={styleScroll}>
          <Task openModal={0} title="Tarefas" labelColor="#f28b82" />
          <Doing openModal={0} title="Em andamento" labelColor="#6ae2ed" />
          <Done openModal={0} title="Prontas" labelColor="#6abc05" />
          <Modal visibleModal={false}/>
        </div>
      )}
    </TaskContext.Consumer>
  )
}

export default Board