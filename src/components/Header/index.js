import React from 'react';
import { BsTextLeft } from 'react-icons/bs';

import './style.css'
import NewTask from '../New-task';

const Header = () => {
  return (
    <div className="header container">
      <div className="logo">Tasks</div>
      <div className="menu">
        <NewTask />
        <BsTextLeft className="btn-icon"/>
      </div>
    </div>
  )
}

export default Header


