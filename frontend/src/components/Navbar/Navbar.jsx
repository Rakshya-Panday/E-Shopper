import React from 'react'
import './Navbar.css'
import logo from '../Assests/logo.jpg'
import cart from '../Assests/cart.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src= {logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
       
          <ul className='nav-menu'>
            <li>Shop</li>
          
            <li>Men</li>
            <li>Female</li>
            <li>Kids</li>
            </ul>
        
        <div className='nav-login-cart'>
          <button>Login</button>
          <img src={cart} alt="cart" />


        </div>

        <hr />
    </div>
    
  )
}

export default Navbar