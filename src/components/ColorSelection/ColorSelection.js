import React from 'react'
import Rectangle from '../Rectangle/Rectangle';
import Square from '../Square/Square';
import './ColorSelection.css';

export default function ColorSelection() {
    return (
        <div className="colorSelectionContainer">
            <div className="selectedPallette">
                <Rectangle w={75} h={200} m={10}/>
                <Rectangle w={75} h={200} m={10}/>
                <Rectangle w={75} h={200} m={10}/>
                <Rectangle w={75} h={200} m={10}/>
                <Rectangle w={75} h={200} m={10}/>
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
