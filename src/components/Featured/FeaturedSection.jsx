import React from 'react';
import Carousel from '../ReusableComponents/Carousel/Carousel.jsx';
import FeaturedSectionData from './FeaturedSectionData'; // Replace with actual data import

function FeaturedSection() {
    const heading = "Featured";
    const carouselStyle = {
    };

    return (
        <div className="slider-container featured-slider">
            <Carousel heading={heading} slidesData={FeaturedSectionData} slidesToShow={3} customStyle={carouselStyle} />
        </div>
    );
}

export default FeaturedSection;
