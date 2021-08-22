import React from 'react'
import './Circle.css';

export default function Circle({ currentColor }) {

    return (
        <div>
            <div className="circle" style={{backgroundColor: `#${currentColor}`}}></div>
        </div>
    )
}
