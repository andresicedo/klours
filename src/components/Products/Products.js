import React from 'react'
import './Products.css';
import Card from '../Card/Card';
import HomePaint from '../../assets/images/HomePaint.jpg';
import StainedWood from '../../assets/images/StainedWood.jpg';
import ConcreteFloor from '../../assets/images/ConcreteFloor.jpg';

export default function Products() {
    return (
        <div>
            <div>
                <p>Products Component</p>
            </div>
            <div className='productsCards'>
                <Card type={'Painting Products'} cardImg={HomePaint} cardText={'Test'}/>
                <Card type={'Staining Products'} cardImg={StainedWood} cardText={'Test'}/>
                <Card type={'Concrete Products'} cardImg={ConcreteFloor} cardText={'Test'}/>
            </div>
        </div>
    )
}
