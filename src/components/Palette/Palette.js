import React from 'react'
import './Palette.css';
import Circle from '../Circle/Circle';

export default function Palette() {
    return (
        <div style={{display: 'flex', justifyContent: "center"}}>
                <div className="circleContainer">
                    <Circle currentColor='C9E4CA' />
                    <Circle currentColor='87BBA2' />
                    <Circle currentColor='55828B' />
                    <Circle currentColor='3B6064' />
                    <Circle currentColor='364958' />
                </div>
            </div>
    )
}
