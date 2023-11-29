import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <span className='logo'>Attire</span>

      <div className="navs">
        <ul className='footer_nav'>
          <p className='title_footer_nav'>SERVICE</p>
          <li><a href="#" className='footer_li'>Delivery</a></li>
          <li><a href="#" className='footer_li'>Returns</a></li>
          <li><a href="#" className='footer_li'>Size guide</a></li>
          <li><a href="#" className='footer_li'>FAQ</a></li>
        </ul>
        <ul className='footer_nav'>
          <p className='title_footer_nav'>COMPANY</p>
          <li><a href="#" className='footer_li'>About us</a></li>
          <li><a href="#" className='footer_li'>Contact us</a></li>
          <li><a href="#" className='footer_li'>Privacy Policy</a></li>
        </ul>
        <ul className='footer_nav'>
          <p className='title_footer_nav'>women</p>
          <li><NavLink to="/w&k" className='footer_li'>Warm & Knitted</NavLink></li>
          <li><a href="#" className='footer_li'>Rose Petal Dreams</a></li>
          <li><a href="#" className='footer_li'>Cozy Classics Collection</a></li>
        </ul>
        <ul className='footer_nav2'>
          <p className='title_footer_nav'>men</p>
          <li><a href="#" className='footer_li'>Urban Elegance Collection</a></li>
          <li><a href="#" className='footer_li'>Cozy Classics Collection</a></li>
          <li><a href="#" className='footer_li'>Streetwear Series</a></li>
        </ul>
        <ul className='footer_nav'>
          <p className='title_footer_nav'>home</p>
          <li><a href="#" className='footer_li'>Tranquil Living Déco</a></li>
          <li><a href="#" className='footer_li'>Home Harmony Accents</a></li>
          <li><a href="#" className='footer_li'>Homestead Collection</a></li>
        </ul>
      </div>

      <div className="caps">
        <p className='footer_cap'>© 2023 Attire All rights reserved</p>
        <p className='footer_cap'>Privacy Policy and Cookies</p>
      </div>
    </footer>
  )
}
