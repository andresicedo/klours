import React from 'react'
import './TopFeature.css';
import Circle from '../Circle/Circle';

export default function TopFeature() {
    return (
        <div style={{display: 'flex', justifyContent: "center"}}>
                <div className="circleContainer">
                    <Circle />
                    <Circle />
                    <Circle />
                    <Circle />
                    <Circle />
                </div>
            </div>
    )
}
