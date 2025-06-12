import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" srcset="" />
                <p>Welcome to Tomato! Where every dish is a delight and every bite is an adventure. Thank you for choosing to dine with us. We hope you enjoy your meal and look forward to serving you again soon. Bon appétit!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>Get in touch</h2>
                <ul>
                    <li>01303202218</li>
                    <li>mdnaim01303202218@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2023 Tomato.com - All Right Reserved. 
        </p>
    </div>
  )
}

export default Footer