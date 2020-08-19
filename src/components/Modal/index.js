import React, { useContext } from 'react';

import './style.css'
import { TaskContext } from '../../contexts/TaskContext';

const Modal = _ => {

  const context = useContext(TaskContext)

  const animateModal = {
    top: context.openModal ? '50%' : false
  }

  const handleModal = (event) => event.stopPropagation()

  return (
    <TaskContext.Consumer>
      {({toggleModal}) => (
      <div className="modal" style={animateModal} onClick={(e) => handleModal(e)}>
        <div className="modal-header">
          <h2>Adicione uma tarefa</h2>
        </div>
        <div className="modal-body">
          <form>
            <div className="field-input">
              <input type="text" placeholder="Título"/>
            </div>  
            <div className="field-input">
              <input type="text" placeholder="Descrição"/>
            </div>  
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn-primary btn">adicionar</button>
          <button className="btn-cancel btn" onClick={() => toggleModal(false)}>cancelar</button>
        </div>
      </div>
      )}
    </TaskContext.Consumer>
  );
};

export default Modal;