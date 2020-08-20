import React from 'react';

import { BsTextRight } from 'react-icons/bs';

import { CardWraper, Title, CardBody } from './style'

const Card = props => {
  return (
    <CardWraper style={{background: props.labelColor}}>
      <Title>Titulo</Title>
      <CardBody>
        <p>Descrição card</p>
        <button>{ !props.done ? <BsTextRight /> : false }</button>
      </CardBody>
    </CardWraper>
  )
}

export default Card