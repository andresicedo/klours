import React from 'react';
import './Rectangle.css';

export default function Rectangle({w, h}) {
    return (
        <div className="rectangle" style={{width: `${w}px`, height: `${h}px`}}>
            
        </div>
    )
}
