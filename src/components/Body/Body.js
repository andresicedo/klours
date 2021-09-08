import React from 'react'
import DiscountModal from '../../Modals/DiscountModal';
import Palette from '../Palette/Palette';
import Ideas from '../Ideas/Ideas';
import Products from '../Products/Products';
import UserPalette from '../UserPalette/UserPalette';
import Media from '../Media/Media';
import './Body.css';

export default function Body() {
    return (
        <div>
            <Palette />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '9px'}}>
                <p style={{ textAlign: 'center', marginRight: '10px', marginTop: '5px' }}>Color Palette of the Week</p>
                <DiscountModal />
            </div>
            <Ideas />
            <Products />
            <UserPalette />
            <Media />
        </div>
    )
}
