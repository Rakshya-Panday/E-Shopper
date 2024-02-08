import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.jpg";
import cart from "../Assests/cart.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {

  const[menu , setMenu] = useState("shop")
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick = {()=>{setMenu("shop")}}> <Link to = './'>Shop</Link> {menu==="shop"?<hr />:<></>}</li>
        
        <li onClick = {()=>{setMenu("mens")}}>Men  {menu==="mens"?<hr />:<></>}</li>
        <li onClick = {()=>{setMenu("womens")}}>Female {menu==="womens"?<hr />:<></>}</li>
        <li onClick = {()=>{setMenu("kids")}}>Kids {menu==="kids"?<hr />:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        <button><Link to = '/login'>Login</Link></button>
        <img src={cart} alt="cart" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
