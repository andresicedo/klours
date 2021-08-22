import React from 'react'
import Palette from '../Palette/Palette';
import './Body.css';

export default function Body() {
    return (
        <div>
            <Palette />
            <p style={{textAlign: 'center'}}>Color Palette of the Week</p>
        </div>
    )
}
