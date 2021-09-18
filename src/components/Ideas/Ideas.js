import React from 'react'
import Card from '../Card/Card'
import './Ideas.css'
import ProjectIdeasImg from '../../assets/images/ProjectIdeas.jpg'
import Bedroom from '../../assets/images/Bedroom.jpg';
import Kitchen from '../../assets/images/Kitchen.jpg';
import Outdoor from '../../assets/images/Outdoor.jpg';


export default function Ideas() {
    let kitchenIdeas = 'Rethink the way you see your cabinets with these easy-to-follow painting projects.'
    let outdoorIdeas = "Brighten up your home's exterior with projects that boost curb appeal and give your space a personalized look."
    let bedroomIdeas = 'Painting a room offers an inexpensive way to refresh its appearance. A new coat of paint can brighten up a small room or bring warmth to large spaces.'


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
                <Card type={'Bedroom'} cardImg={Bedroom} cardText={bedroomIdeas}/>
                <Card type={'Kitchen'} cardImg={Kitchen} cardText={kitchenIdeas}/>
                <Card type={'Outdoor'} cardImg={Outdoor} cardText={outdoorIdeas}/>
            </div>
        </div>
    )
}
