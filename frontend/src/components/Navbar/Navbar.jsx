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
        <li onClick = {()=>{setMenu("shop")}}> <Link style={{textDecoration : "none"}} to = './'>Shop</Link> {menu==="shop"?<hr />:<></>}</li>
        
        <li onClick = {()=>{setMenu("mens")}}> <Link style={{textDecoration : "none"}} to = './man'>Men</Link>  {menu==="mens"?<hr />:<></>}</li>
        <li onClick = {()=>{setMenu("womens")}}><Link style={{textDecoration : "none"}} to = './women'>Female</Link> {menu==="womens"?<hr />:<></>}</li>
        <li onClick = {()=>{setMenu("kids")}}><Link style={{textDecoration : "none"}} to = './kid'>kids</Link> {menu==="kids"?<hr />:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        <button><Link style={{textDecoration : "none", color: "white"}}  to = '/login'>Login</Link></button>
        <img  src={cart} alt="cart"  />
        <div  className="nav-cart-count"><Link style={{textDecoration : "none"}} to = './cart'>0</Link></div>
      </div>
    </div>
  );
};

export default Navbar;
