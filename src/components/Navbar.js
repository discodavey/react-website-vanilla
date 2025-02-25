import React from 'react'
import logo from '../assets/images/impulse-logo-1.svg';

function Navbar() {
  return (
    <div className="navigation">
      <div className="left-column"></div>
      <div className="right-column">
        <img src={logo} alt="Impulse Radio" />
      </div>
    </div>
  )
}

export default Navbar