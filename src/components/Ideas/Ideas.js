import React from 'react'
import Card from '../Card/Card'
import './Ideas.css'
import ProjectIdeasImg from '../../assets/images/ProjectIdeas.jpg'

export default function Ideas() {
    return (
        <div>
            <div className="ideasTitle" 
            style={{
                backgroundImage: `url(${ProjectIdeasImg})`, 
                backgroundSize: 'cover', 
                objectFit: 'contain'}}>
                <p>Project Ideas</p>
            </div>
            <div className="ideaCards">
                <Card room={'Bedroom'}/>
                <Card room={'Kitchen'}/>
                <Card room={'Outdoor'}/>
            </div>
        </div>
    )
}
