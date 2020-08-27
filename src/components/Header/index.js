import React, { useContext } from 'react';
import { BsTextLeft } from 'react-icons/bs'
import { GoLightBulb } from 'react-icons/go'

import './style.css'
import NewTask from '../New-task'
import { TaskContext } from '../../contexts/TaskContext'
import { darkModeMenu, darkModeText } from '../../utils/dark-mode'

const Header = () => {

  const context = useContext(TaskContext)

  const lamp = {
    color: context.darkMode ? 'var(--yellow-color)' : false
  }

  return (
    <TaskContext.Consumer>
      {({toggleDarkMode}) => (
        <header className="header container" style={ darkModeMenu(context) }>
          <div className="logo" style={ darkModeText(context) }>Tasks</div>
          <div className="menu">
            <NewTask />
            <GoLightBulb style={ lamp } onClick={() => toggleDarkMode(true) } className="btn-icon" />
            <BsTextLeft style={ darkModeText(context) } className="btn-icon" />
          </div>
      </header>
      )}
    </TaskContext.Consumer>
  )
}

export default Header


