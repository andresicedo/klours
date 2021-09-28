import React from 'react';
import './Square.css';

export default function Square({w, h, m}) {
    return (
        <div className="square" style={{width: `${w}px`, height: `${h}px`, marginBottom: `${m}px`}}>
            
        </div>
    )
}
