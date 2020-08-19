import React, { useContext } from 'react';

import './style.css';
import HeaderLabelTitle from '../Label-Title';
import Card from '../Card'
import { TaskContext } from '../../contexts/TaskContext';

const Doing = props => {
  
  const context = useContext(TaskContext)

  const filter = context.openModal ? context.FilterBlur : false
  
  return (
    <div className="list" style={{filter}}>
      <HeaderLabelTitle sizeTask={2} title={props.title} labelColor={props.labelColor} />
      <Card progress={70} labelColor="#fff475" done={false}/>
      <Card progress={50} labelColor="#f28b82" done={false}/>
      <Card progress={100} labelColor="#d7aefb" done={false}/>
      <Card progress={70} labelColor="#fff475" done={false}/>
    </div>
  )
}

export default Doing