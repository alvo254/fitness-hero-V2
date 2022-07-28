import React from 'react'
import './Header.css'
import Logo from '../../images/logo.png'

function Header() {
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
        <ul className='header-list'>
            <li>Home</li>
            <li>Programs</li>
            <li>why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header