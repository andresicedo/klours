import React, { useState } from 'react'
import './Circle.css';

export default function Circle() {
    const [color, setColor] = useState('black');

    let generateColor = () => {
        let color = ['#'];
        while (color.length !== 7) {
            color.push(getRandValue());
        }//push six rand values to color array
        setColor(color.join(''));//return hex string
    }
    
    let getRandValue = () => {//set possible hex values in var and return rand value
        let alphabet = "abcdef123456789";
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    return (
        <div>
            <div className="circle" style={{backgroundColor: color}}></div>
        </div>
    )
}
