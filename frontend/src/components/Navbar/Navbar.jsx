import React from 'react'
import './Navbar.css'
import logo from '../Assests/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src= {logo} alt="logo" />
            <p>SHOPPER</p>
        </div>


    </div>
  )
}

export default Navbar