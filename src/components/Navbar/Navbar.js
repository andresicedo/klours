import React from 'react';
import './Navbar.css';
import Logo from '../../assets/images/kloursLogo.png'

export default function Navbar() {
    return (
        <div className='navbarContainer'>
            <div className='navbarLeft'>
                <img alt="" src={Logo} style={{width: '150px', height: 'auto'}} />
            </div>
            <div className='navbarRight'>
                <p>Home</p>
                <p>Pricing</p>
                <p>Contact Us</p>
            </div>
        </div>
    )
}
