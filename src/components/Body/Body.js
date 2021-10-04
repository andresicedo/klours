import React from 'react'
import DiscountModal from '../../Modals/DiscountModal';
import Palette from '../Palette/Palette';
import Ideas from '../Ideas/Ideas';
import Products from '../Products/Products';
import UserPalette from '../UserPalette/UserPalette';
import Pricing from '../Pricing/Pricing';
import About from '../About/About';
import Media from '../Media/Media';
import './Body.css';

export default function Body() {
    return (
        <div id="home">
            <Palette />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '9px'}}>
                <p style={{ textAlign: 'center', marginRight: '10px', marginTop: '5px', fontSize: '24px', fontWeight: 'bolder' }}>Color Palette of the Week</p>
                <DiscountModal />
            </div>
            <Ideas />
            <Products />
            <UserPalette />
            <Pricing />
            <About />
            <Media />
        </div>
    )
}
