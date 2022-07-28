import React from 'react'

import './Header.css'
import logo from '../../Images/logo.png'
import CustomLink from '../CustomLink/CustomLink';

function Header() {
    return (
        <div className='bg-blue'>
        
      <div className="navbar container mx-auto header">
            <div className="flex-1 mt-4">
                <img src={logo} alt=""/>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><CustomLink  to="/">Home</CustomLink></li>
                    <li><CustomLink  to="/services">Services</CustomLink></li>
                    <li><CustomLink  to="/login">Login</CustomLink></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Header;
