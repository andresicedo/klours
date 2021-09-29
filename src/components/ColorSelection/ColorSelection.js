import React from 'react'
import Rectangle from '../Rectangle/Rectangle';
import Square from '../Square/Square';
import './ColorSelection.css';

export default function ColorSelection() {

    let getWidth = (idx) => {
        return (idx === 0 ? 120 : 75);
    }
    
    let colorOptions = [
        ['435F62', 'B2CBC8', 'C0C8BB', 'B6BDAD', 'FFFFFF'],
        ['D4774C', 'D2C2A9', 'F6F2E6', '6C6C6A', '497E7E'],
        ['BCC5CD', 'BBBDB8', 'EADECE', '8F8792', 'FFFFFF'],
        ['A0B3BA', '6A7881', 'D7D4CB', 'DCDEDA', 'FFFFFF'],
        ['EDE1CE', '73645D', 'B9B2AC', 'C0C1BC', 'FFFFFF']
    ];

    

    return (
        <div className="colorSelectionContainer">
            <div className="selectedPallette">
                {
                    colorOptions[0].map((option) => (
                        <Rectangle key={option} w={getWidth(colorOptions[0].indexOf(option))} h={200} m={10} bgColor={option}/>
                    ))
                }
            </div>
            <div className="paletteOptions">
                <Square w={45} h={45} m={6}/>
                <Square w={45} h={45} m={6}/>
                <Square w={45} h={45} m={6}/>
                <Square w={45} h={45} m={6}/>
            </div>
        </div>
    )
}
