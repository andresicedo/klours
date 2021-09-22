import React from 'react'
import './Products.css';
import Card from '../Card/Card';
import HomePaint from '../../assets/images/HomePaint.jpg';
import StainedWood from '../../assets/images/StainedWood.jpg';
import ConcreteFloor from '../../assets/images/ConcreteFloor.jpg';
import Carousel from '../Carousel/Carousel';

export default function Products() {

    let carouselDetails = {
        paintingProducts: ['Painting Products', HomePaint, 'Test'],
        stainingProducts: ['Staining Products', StainedWood, 'Test'],
        concreteProducts: ['Concrete Products', ConcreteFloor, 'Test'],
    }

    return (
        <div>
            <div>
                <p>Products Component</p>
            </div>

           <Carousel carouselDetails={carouselDetails}/>

            <div className='productsCards'>
                <Card type={'Painting Products'} cardImg={HomePaint} cardText={'Test'} />
                <Card type={'Staining Products'} cardImg={StainedWood} cardText={'Test'} />
                <Card type={'Concrete Products'} cardImg={ConcreteFloor} cardText={'Test'} />
            </div>
        </div>
    )
}
