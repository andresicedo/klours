import React from 'react';
import './Media.css';

export default function Media() {
    return (
        <div id="contact" className="mediaContainer">
            <div className="mediaLeft">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p>Contact Us</p>
                    <div>
                        <p>Store #1</p>
                        <p>Street</p>
                        <p>Houston, TX 11111</p>
                        <p>111-111-1111</p>
                    </div>
                </div>
            </div>
            <div className="mediaRight">
                <p>Find Us On</p>
                <div>Facebook</div>
                <div>Instagram</div>
                <div>LinkedIn</div>
                <div>Twitter</div>
                <div>Email</div>
            </div>
        </div>
    )
}
