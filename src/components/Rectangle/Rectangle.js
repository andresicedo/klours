import React from 'react';
import './Rectangle.css';
import Clipboard from '../../assets/images/Copy.png'

export default function Rectangle({w, h, m, bgColor}) {
    return (
        <div className="rectangleContainer">
            <div className="rectangle" style={{width: `${w}px`, height: `${h}px`, marginRight: `${m}px`, backgroundColor: `#${bgColor}`}}>
                
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginRight: `${m}px`}}>
                <p style={{marginTop: '21px'}}>{`#${bgColor}`}</p>
                <button 
                    onClick={() =>  navigator.clipboard.writeText(bgColor)}
                    style={{background: 'none', border:"none"}}>
                    <img alt="clipboardImage" src={Clipboard} style={{marginTop: '3px', width: '21px', height: 'auto'}}/>
                </button>
            </div>
        </div>
    )
}
