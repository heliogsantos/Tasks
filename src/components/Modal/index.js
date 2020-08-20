import React, { useContext } from 'react';

import './style.css'
import { TaskContext } from '../../contexts/TaskContext';
import Button from '../Button';

const Modal = props => {

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
          <Button
            text="adicionar" 
            bgColorName="primary"
            fontSize="14"
            padding="7px 20"
            color="white"
          />

          <Button
            text="cancelar"
            bgColorName="cancel"
            fontSize="14"
            padding="7px 20"
            color="white"
            callback={() => toggleModal(false)} 
          />
        </div>
      </div>
      )}
    </TaskContext.Consumer>
  );
};

export default Modal;