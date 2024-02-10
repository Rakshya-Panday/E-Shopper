import React from 'react'
import './Footer.css'
import logo from '../Assests/logo.jpg';
import twitter from '../Assests/twitter.jpg';
import youtube from '../Assests/youtube.jpg';
import instragram from '../Assests/instragram.jpg';
import tiktok from '../Assests/tiktok.jpg';
import whatsapp from '../Assests/whatsapp.jpg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <img src= {logo} alt="footerlogo" />
        <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instragram} alt="" />
                <img src={youtube} alt="" />
                <img src={tiktok} alt="" />
                <img src={whatsapp} alt="" />
                <img src={twitter} alt="" />

            </div>
        </div>
        <hr />
        <div className="footer-copyright">
           
            <p>Copyright @ 2023 - All rights are reversed</p>
        </div>

    </div>
  )
}

export default Footer