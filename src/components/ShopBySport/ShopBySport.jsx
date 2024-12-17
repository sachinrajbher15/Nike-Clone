import React from 'react';
import Carousel from '../ReusableComponents/Carousel/Carousel.jsx';
import ShopBySportData from './ShopBySportData'; // Replace with actual data import

function ShopBySport() {
    const heading = "Shop By Sport";
    const carouselStyle = {
    };

    return (
        <div className="slider-container shop-by-sport-slider">
            <Carousel heading={heading} slidesData={ShopBySportData} slidesToShow={3} customStyle={carouselStyle} />
        </div>
    );
}

export default ShopBySport;
