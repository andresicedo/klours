import React from 'react'
import './Card.css'

export default function Card({type, cardImg, cardText}) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={cardImg} className="card-img-top" alt="painting examples" style={{width: '100%', height: '250px'}} />
            <div className="card-body">
                <h5 className="card-title">{type}</h5>
                <p className="card-text" style={{height: '60%'}}>{cardText}</p>
                <button className="btn btn-primary">Explore</button>
            </div>
        </div>
    )
}
