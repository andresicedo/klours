import React from 'react'
import './Products.css';
import HomePaint from '../../assets/images/HomePaint.jpg';
import StainedWood from '../../assets/images/StainedWood.jpg';
import ConcreteFloor from '../../assets/images/ConcreteFloor.png';
import Carousel from '../Carousel/Carousel';

export default function Products() {

    let homePaintText = "Considering a new coat of paint to take your home interior to the next level? We've got you covered."
    let stainingText = "Protect the surface of furniture in style. Our staining products will take your project from good, to great!";
    let concreteText = "Need to fill or repair control joints, random cracks, or voids? Take a look at our concrete coating, preparation and decorative products.";

    let carouselDetails = {
        paintingProducts: ['Painting Products', HomePaint, homePaintText],
        stainingProducts: ['Staining Products', StainedWood, stainingText],
        concreteProducts: ['Concrete Products', ConcreteFloor, concreteText],
    }

    return (
        <div>
            <div>
                <p>Products Component</p>
            </div>
           <Carousel carouselDetails={carouselDetails}/>
        </div>
    )
}
