import React from 'react'
import './Popular.css';
import data_product from '../Assests/data.js'
import Item from '../Items/Item.jsx';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN KIDS</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item)=>(
           <Item key = {item.id} id = {item.id} name = {item.name} image = {item.image} old_price = {item.old_price} new_price = {item.new_price}/>
        ))}
      </div>
    </div>
  )
}

export default Popular