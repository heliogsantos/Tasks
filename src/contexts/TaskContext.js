import React, { useState, createContext } from 'react'
import FilterBlur from '../utils/filter-blur'

const TaskContext = createContext()

const TaskContextProvider = ({ children }) => {

  const [openModal, setOpenModal] = useState(false)

  const state = {
    openModal: openModal,
    FilterBlur,
    toggleModal(props) {
      setOpenModal(props)
    }
  }

  return (
    <TaskContext.Provider value={ state }>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskContextProvider }