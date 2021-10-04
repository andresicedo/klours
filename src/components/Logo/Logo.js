import React from 'react'
import './Logo.css';

export default function Logo() {

    let colorsOfTheWeek = ['6B7D7D','8EAF9D','A6D8D4','B9CDDA','D4CDF4','313D5A','183642'];

    let bgColorForDayOfWeek = () => {
        return new Date().getDay();
    }


    return (
        <div className="logoContainer" style={{backgroundColor: `#${colorsOfTheWeek[bgColorForDayOfWeek()]}`}}>
            BP
        </div>
    )
}
