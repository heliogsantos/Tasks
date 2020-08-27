import React, { useContext } from 'react';

import { ButtonComponent } from './style'
import { darkModeMenu, darkModeText, darkModeBorderButton } from '../../utils/dark-mode'
import { TaskContext } from '../../contexts/TaskContext'

  const Button = ( { text, callback = () => {}, bgColorName, fontSize, padding, color } ) => {

  const context = useContext(TaskContext)

  const styleButton = {
    ...darkModeMenu(context),
    ...darkModeBorderButton(context)
  }

  return (
    <ButtonComponent
      style={styleButton}
      bgColorName={bgColorName}
      fontSize={fontSize}
      padding={padding}
      color={context.darkMode ? darkModeText(context) : color}
      onClick={() => callback()}>
      {text}
    </ButtonComponent>
  )
}

export default Button;