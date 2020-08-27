import React, { useState } from 'react';

import { BsTextRight } from 'react-icons/bs';

import { CardWraper, Title, CardBody, Menu, List } from './style'
import Button from '../Button';

const Card = props => {

  const [menuActive, setMenuActive] = useState(false)
  
  const handleMenu = () => setMenuActive(menu => !menu)

  return (
    <CardWraper style={{background: props.labelColor}}>
      <Title>Titulo</Title>
      <CardBody>
        <p>Descrição card</p>
        {
          !props.done ? <BsTextRight onClick={handleMenu} /> : false}
        {
          menuActive ? 
            <Menu>
              <List onClick={handleMenu} color="cancel">remover</List>
              <List onClick={handleMenu} color="primary">Em andamento</List>
              <List onClick={handleMenu}  color="blue-default">pronto</List>
            </Menu> 
          : false
        }
      </CardBody>
    </CardWraper>
  )
}

export default Card