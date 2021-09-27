import React from 'react';
import ColorSelection from '../ColorSelection/ColorSelection';
import './UserPalette.css';

export default function UserPalette() {
    return (
        <div>
            <div>
                User Palette Component
            </div>
            <div>
                <ColorSelection />
            </div>
        </div>
    )
}
