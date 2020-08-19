import React from 'react';

import { BsTextRight } from 'react-icons/bs';

import './style.css'

const Card = props => {
  return (
    <div className="card" style={{background: props.labelColor}}>
      <div className="card-header">
        <h2>Titulo</h2>
      </div>
      <div className="card-body">
        <p>Descrição card</p>
        {
          !props.done ? <BsTextRight className="icon" /> : false
        }
      </div>
    </div>
  )
}

export default Card