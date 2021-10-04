import React, { useState } from 'react'
import Rectangle from '../Rectangle/Rectangle';
import Square from '../Square/Square';
import './ColorSelection.css';

export default function ColorSelection() {
    const [selected, setSelected] = useState(0);

    let getWidth = (idx) => {
        return (idx === 0 ? 210 : 120);
    }
    
    let colorOptions = [
        ['435F62', 'B2CBC8', 'C0C8BB', 'B6BDAD', 'FFFFFF'],
        ['D4774C', 'D2C2A9', 'F6F2E6', '6C6C6A', '497E7E'],
        ['BCC5CD', 'BBBDB8', 'EADECE', '8F8792', 'FFFFFF'],
        ['A0B3BA', '6A7881', 'D7D4CB', 'DCDEDA', 'FFFFFF'],
        ['EDE1CE', '73645D', 'B9B2AC', 'C0C1BC', 'FFFFFF'],
        ['9381FF', 'B8B8FF', 'F8F7FF', 'FFEEDD', 'FFD8DE'],
        ['F4F1DE', 'E07A5F', '3D405B', '81B29A', 'F2CC8F'],
        ['38302E', '6F6866', '788585', '9CAEA9', 'CCDAD1'],
        ['FECDAA', 'FAFAC6', 'FCFFEB', 'F8FFF4', '474350'],
        ['94849B', 'A0AAB2', 'C7CEDB', '7E9181', '2E3532'],
        ['595959', '7F7F7F', 'A5A5A5', 'CCCCCC', 'F2F2F2'],
        ['B36A5E', 'C97C5D', 'C89F9C', 'EED7C5', 'EEE2DF'],
        ['2C2A4A', '7FDEFF', '4F518C', '907AD6', 'DABFFF'],
        ['2D232E', '474448', 'E0DDCF', '534B52', 'F1F0EA'],
        ['2E6171', '556F7A', '798086', 'B79FAD', 'D4AFCD'],
    ];

    let getFirstColor = (array) => {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i][0];
            result.push(element);
        }
        return result;
    }


    return (
        <div className="colorSelectionContainer">
            <div className="paletteOptions">
                {
                    getFirstColor(colorOptions).map((option) => (
                        <button className="colorOptionButton" key={option} onClick={() => { setSelected(getFirstColor(colorOptions).indexOf(option)) }}>
                            <Square key={option} w={36} h={36} m={6} bgColor={option}/>
                        </button>
                    ))
                }
            </div>

            <div className="selectedPallette">
                {
                    colorOptions[selected].map((option) => (
                        <Rectangle key={option} w={getWidth(colorOptions[selected].indexOf(option))} h={200} m={10} bgColor={option}/>
                    ))
                }
            </div>
            
        </div>
    )
}
