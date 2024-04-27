import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero culpa sed!</p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-right">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Policies</li>
                    <li>Delievery</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+91-90199019</li>
                    <li>info@EasyFood.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">All Rights Reserved </p>
    </div>
  )
}

export default Footer