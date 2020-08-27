import React, { useState, useContext } from 'react';

import { BsTextRight } from 'react-icons/bs';

import { CardWraper, Title, CardBody, Menu, List } from './style'
import { TaskContext } from '../../contexts/TaskContext';
import { darkModeMenu, darkModeText, darkModeBorderButton } from '../../utils/dark-mode'

const Card = props => {

  const [menuActive, setMenuActive] = useState(false)
  const handleMenu = () => setMenuActive(menu => !menu)
  const context = useContext(TaskContext)

  const styleDarkMode = () => {
    if(context.darkMode) {
      return {
        ...darkModeMenu(context),
        ...darkModeText(context),
        ...darkModeBorderButton(context)
      }
    }

    return {
      background: props.labelColor
    }
  }

  return (
    <CardWraper style={styleDarkMode()}>
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