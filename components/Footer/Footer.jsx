"use client";
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src="/assets/facebook_icon.png" alt="facebook" />
        <img src="/assets/instagram_icon.png" alt="instagram" />
        <img src="/assets/twitter_icon.png" alt="twitter" />
        <img src="/assets/youtube_icon.png" alt="youtube" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Trems of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&copy; 1997-2024 Netflix, Tnc.</p>
    </div>
  )
}

export default Footer
