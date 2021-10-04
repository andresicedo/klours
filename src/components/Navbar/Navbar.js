import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
import UpArrow from '../../assets/images/UpArrow.png'
import Pricing from '../../assets/images/Pricing.png'
import About from '../../assets/images/About.png'
import ContactUs from '../../assets/images/ContactUs.png'

export default function Navbar() {
    return (
        <div className='navbarContainer sticky-top'>
            <a href="#home" style={{textDecoration: 'none'}}>
                <button type="button" className='navbarLeft' style={{border: 'none', backgroundColor: '#FAFAFA'}}>
                        <Logo />
                        <div className="companyName">
                            <p style={{fontWeight: 'bold'}}>BETTER Paints</p>
                        </div>
                </button>
            </a>
            <div className='navbarRight'>
                <p>
                    <a href="#home">
                        <button type="button" style={{background: 'none', border: 'none'}}>
                            <img alt="arrow pointing to top of page" src={UpArrow} style={{width: '40px'}}/>
                        </button>
                    </a>
                </p>
                <p>
                    <a href="#pricing">
                        <button type="button" style={{background: 'none', border: 'none'}}>
                            <img alt="pricingImage" src={Pricing} style={{width: '40px'}}/>
                        </button>
                    </a>
                </p>
                <p>
                    <a href="#about">
                        <button type="button" style={{background: 'none', border: 'none'}}>
                            <img alt="HeartImage" src={About} style={{width: '40px'}}/>
                        </button>
                    </a>
                </p>
                <p>
                    <a href="#contact"> 
                        <button type="button"  style={{background: 'none', border: 'none'}}>
                            <img alt="ContactIcon" src={ContactUs} style={{width: '40px'}}/>
                        </button>
                    </a>
                </p>
            </div>
        </div>
    )
}
