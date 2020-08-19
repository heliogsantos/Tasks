import React, { useContext } from 'react';

import './style.css';
import Card from '../Card';
import HeaderLabelTitle from '../Label-Title';
import { TaskContext } from '../../contexts/TaskContext';

const Task = props => {

  const context = useContext(TaskContext)

  const filter = context.openModal ? context.FilterBlur : false
  
  return (
    <div className="list" style={{filter}}>
      <HeaderLabelTitle sizeTask={26} title={props.title} labelColor={props.labelColor} />
      <Card progress={100} labelColor="#ccff90" done={false}/>
      <Card progress={100} labelColor="#f28b82" done={false}/>
      <Card progress={100} labelColor="#fff475" done={false}/>
      <Card progress={100} labelColor="#d7aefb" done={false}/>
      <Card progress={100} labelColor="#fff475" done={false}/>
      <Card progress={100} labelColor="#ccff90" done={false}/>
      <Card progress={100} labelColor="#f28b82" done={false}/>
      <Card progress={100} labelColor="#fff475" done={false}/>
      <Card progress={100} labelColor="#d7aefb" done={false}/>
      <Card progress={100} labelColor="#fff475" done={false}/>
    </div>
  )
}

export default Task