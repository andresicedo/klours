import React from 'react'
import './Circle.css';
import Clipboard from '../../assets/images/Copy.png'

export default function Circle({ currentColor }) {

    return (
        <div>
            <div className="circle" style={{backgroundColor: `#${currentColor}`}}></div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <p id="hexColor"className="hexColor" style={{marginTop: '21px', fontWeight: 'bolder'}}>{`#${currentColor}`}</p>
                <button 
                    onClick={() =>  navigator.clipboard.writeText(currentColor)}
                    style={{background: 'none', border:"none"}}>
                    <img alt="clipboardImage" src={Clipboard} style={{marginTop: '3px'}}/>
                </button>
            </div>

        </div>
    )
}
