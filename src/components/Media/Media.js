import React from 'react';
import './Media.css';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import LinkedIn from '../../assets/images/LinkedIn.png';
import Twitter from '../../assets/images/Twitter.png';
import Email from '../../assets/images/Email.png';


export default function Media() {

    let locations = [
        ['Store #1', '333 Main St', 'Houston, TX 77002', '281-111-2121'],
        ['Store #2', '231 West Rd', 'Houston, TX 77010', '281-333-2121'],
        ['Store #3', '444 Greens Rd', 'Houston, TX 77077', '281-444-2121']
    ]

    let socialMediaButtons = [
        ['Facebook', Facebook],
        ['instagram', Instagram],
        ['LinkedIn', LinkedIn],
        ['Twitter', Twitter],
    ]

    return (
        <div id="contact" className="mediaContainer">
            <div className="mediaLeft">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{fontSize: '18px'}}>Contact Us</p>
                    <div className="locationsContainer">
                        {
                            locations.map((location) => (
                                <div style={{fontSize: '12px', marginRight: '9px'}}>
                                    <p className="store">{location[0]}</p>
                                    <p className="street">{location[1]}</p>
                                    <p className="cityStateZip">{location[2]}</p>
                                    <p className="phoneNumber"><a href="tel:2817771418" style={{textDecoration: 'none', color: 'white'}}>{location[3]}</a></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="mediaRight">
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px', marginRight: '15px'}}>
                    {
                        socialMediaButtons.map((icon) => (
                            <button style={{border: 'none', background: 'none'}}>
                                <img alt={`${icon[0]} icon`} src={icon[1]} style={{width: '36px', height: 'auto', marginRight: '6px'}}/>
                            </button>
                        ))
                    }
                    <button style={{border: 'none', background: 'none'}}><img alt="Email icon" src={Email} style={{width: '36px', height: 'auto', marginRight: '6px'}}/></button>
                </div>
            </div>
        </div>
    )
}
