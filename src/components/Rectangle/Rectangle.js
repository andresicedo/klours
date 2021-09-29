import React from 'react';
import './Rectangle.css';

export default function Rectangle({w, h, m, bgColor}) {
    return (
        
        <div className="rectangle" style={{width: `${w}px`, height: `${h}px`, marginRight: `${m}px`, backgroundColor: `#${bgColor}`}}>
            
        </div>
    )
}
