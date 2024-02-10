import React from 'react'
import './Offers.css'
import women1 from '../Assests/women1.jpg'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers for You</h1>
          <p>ONLY ON BEST SDELLER PRODUCTS</p>
          <button>Check Now</button>
          
        </div>
        <div className="offers-right">
            <img src={women1} alt="" />

        </div>
    </div>
  )
}

export default Offers