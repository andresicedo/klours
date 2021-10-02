import React from 'react';
import ColorSelection from '../ColorSelection/ColorSelection';
import './UserPalette.css';

export default function UserPalette() {
    return (
        <div className="userPaletteContainer">
            <div style={{backgroundColor: '#fcf5e9'}}>
                <p className="userPaletteTitle">Popular Paints</p>
                <p className="userPaletteSummary">Check out some of our most popular color palettes</p>
            </div>
            <div>
                <ColorSelection />
            </div>
        </div>
    )
}
