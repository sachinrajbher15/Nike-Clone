import React from 'react'
import Carousel from '../ReusableComponents/Carousel/Carousel';
import MemberBenifitsData from './MemberBenifitsData.js'

function MemberBenifits() {
    const carouselStyle = {
    };
    const heading = "Member Benifits";
    return (
        <div className='slider-container member-benifits-slider'>
            <Carousel heading={heading} slidesData={MemberBenifitsData} slidesToShow={3} customStyle={carouselStyle} />
        </div>
    )
}

export default MemberBenifits
