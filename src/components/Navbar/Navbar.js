import React from 'react';
import './Navbar.css';
import Logo from '../../assets/images/kloursLogo.png'
import PaintRoller from '../../assets/images/PaintRoller.png'
import Pricing from '../../assets/images/Pricing.png'
import About from '../../assets/images/About.png'
import ContactUs from '../../assets/images/ContactUs.png'

export default function Navbar() {
    return (
        <div className='navbarContainer'>
            <div className='navbarLeft'>
                <img alt="companyLogo" src={Logo} style={{width: '150px', height: 'auto'}} />
                <p style={{marginTop: '30px', marginLeft: '-20px'}}>Colours</p>
            </div>
            <div className='navbarRight'>
                <p>
                    <button style={{background: 'none', border: 'none'}}>
                        <img alt="bucketImage" src={PaintRoller} style={{width: '40px'}}/>
                    </button>
                </p>
                <p>
                    <button style={{background: 'none', border: 'none'}}>
                        <img alt="pricingImage" src={Pricing} style={{width: '40px'}}/>
                    </button>
                </p>
                <p>
                    <button style={{background: 'none', border: 'none'}}>
                        <img alt="HeartImage" src={About} style={{width: '40px'}}/>
                    </button>
                </p>
                <p>
                    <button style={{background: 'none', border: 'none'}}>
                        <img alt="ContactIcon" src={ContactUs} style={{width: '40px'}}/>
                    </button>
                </p>
            </div>
        </div>
    )
}
