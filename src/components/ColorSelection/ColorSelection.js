import React from 'react'
import Rectangle from '../Rectangle/Rectangle';
import './ColorSelection.css';

export default function ColorSelection() {
    return (
        <div className="colorSelectionContainer">
            <div className="selectedPallette">
                <Rectangle w={75} h={200}/>
                <Rectangle w={75} h={200}/>
                <Rectangle w={75} h={200}/>
                <Rectangle w={75} h={200}/>
                <Rectangle w={75} h={200}/>
            </div>
            <div className="paletteOptions">
                <Rectangle w={75} h={45}/>
                <Rectangle w={75} h={45}/>
                <Rectangle w={75} h={45}/>
                <Rectangle w={75} h={45}/>
            </div>
        </div>
    )
}
