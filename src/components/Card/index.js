import React from 'react';

import { BsTextRight } from 'react-icons/bs';

import { CardWraper, Title, CardBody } from './style'
import Button from '../Button';

const Card = props => {
  return (
    <CardWraper style={{background: props.labelColor}}>
      <Title>Titulo</Title>
      <CardBody>
        <p>Descrição card</p>
        <Button
          padding="0"
          color="black"
          text={!props.done ? <BsTextRight /> : false}>
        </Button>
      </CardBody>
    </CardWraper>
  )
}

export default Card