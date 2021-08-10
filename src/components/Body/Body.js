import React from 'react'
import Circle from '../Circle/Circle'
import './Body.css';

export default function Body() {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: "center"}}>
                <div className="circleContainer">
                    <Circle />
                    <Circle />
                    <Circle />
                    <Circle />
                    <Circle />
                </div>
            </div>
            <p style={{textAlign: 'center'}}>Color Palette of the Week</p>
        </div>
    )
}
