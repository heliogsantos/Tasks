import React from 'react';

import { ButtonComponent } from './style'

const Button = ( { text, callback = () => {}, bgColorName, fontSize, padding, color } ) => {

  return (
    <ButtonComponent
      bgColorName={bgColorName}
      fontSize={fontSize}
      padding={padding}
      color={color}
      onClick={() => callback()}>
      {text}
    </ButtonComponent>
  )
}

export default Button;