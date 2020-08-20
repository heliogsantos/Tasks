import React from 'react';

import { ButtonComponent } from './style'

const Button = ({text, callback = () => {}, bgColorName, fontSize }) => {
  return (
    <ButtonComponent
      bgColorName={bgColorName}
      fontSize={fontSize}
      onClick={() => callback()}>
      {text}
    </ButtonComponent>
  )
}

export default Button;