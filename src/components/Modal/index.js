import React, { useContext, useState } from 'react';

import './style.css'
import { TaskContext } from '../../contexts/TaskContext';
import Button from '../Button';
import { FaPalette } from 'react-icons/fa';

const Modal = props => {

  const context = useContext(TaskContext)

  const [activePaletteColor, setActivePaletteColor] = useState(false)
  const [colorPaletteChosen, setColorPaletteChosen] = useState('#ffffffff')

  const animateModal = {
    top: context.openModal ? '50%' : false
  }

  const handleModal = (event) => {
    event.stopPropagation()
    setActivePaletteColor(activePalette => false)
  }

    const palettesColors = [
    {
      color: '#ffffff',
      default: true
    },{
      color: '#f28b82',
    },{
      color: '#fbbc04'
    },{
      color: '#d7aefb'
    },{
      color: '#fdcfe8'
    },{
      color: '#aecbfa'
    },{
      color: '#e6c9a8'
    },{
      color: '#a7ffeb'
    },{
      color: '#FFF475'
    }
  ]

  const stylePaletteColor = {
    top: activePaletteColor ? '0' : '-100%'
  }

  const getColor = (color) => color.color

  const handlePalette = (event) => {
    event.stopPropagation()
    setActivePaletteColor(activePalette => !activePalette)
  }

  const handleStopPalettePropagation = (event) => event.stopPropagation()

  function handleChosenColorModal(colorPaletteChosen) {
    setColorPaletteChosen(getColor(colorPaletteChosen))
  }
  
  return (
    <TaskContext.Consumer>
      {({toggleModal}) => (
      <div className="modal" style={animateModal} onClick={(e) => handleModal(e)}>
        <div className="moda-wraper" style={{ background: colorPaletteChosen }}>
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
              <div onClick={(event => handlePalette(event))} className={activePaletteColor ? "activePaletterIcon" : "pallete-icon"}>
                <FaPalette className="pallete-icon" />
              </div>
            </form>
          </div>
          <div className="palettes-colors" onClick={(event) => handleStopPalettePropagation(event)} style={stylePaletteColor}> 
            {
              palettesColors.map((color, index) => {
                return (
                  <div key={index} className="color-ball" style={{ background: getColor(color)}} onClick={() => handleChosenColorModal(color)}></div>
                )
              })
            } 
          </div>
        </div>
      </div>
      )}
    </TaskContext.Consumer>
  );
};

export default Modal;