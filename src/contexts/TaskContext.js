import React, { useState, createContext } from 'react'
import FilterBlur from '../utils/filter-blur'

const TaskContext = createContext()

const TaskContextProvider = ({ children }) => {

  const [openModal, setOpenModal] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const state = {
    openModal: openModal,
    darkMode: darkMode,
    FilterBlur,
    toggleModal(props) {
      setOpenModal(props)
    },
    toggleDarkMode(props) {
      setDarkMode(props => !props)
    }
  }

  return (
    <TaskContext.Provider value={ state }>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskContextProvider }