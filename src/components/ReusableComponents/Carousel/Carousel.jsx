import React, { useRef, useState } from 'react';
import './Carousel.css'; // Import your carousel styles

function Carousel({ heading, slidesData, slidesToShow = 3, customStyle }) {
    const sliderRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const isLastSlide = sliderRef.current && sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >= sliderRef.current.scrollWidth;
    const isFirstSlide = sliderRef.current && sliderRef.current.scrollLeft === 0;

    const handleScroll = () => {
        if (sliderRef.current) {
            setScrollPosition(sliderRef.current.scrollLeft);
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: sliderRef.current.offsetWidth / slidesToShow,
                behavior: 'smooth',
            });
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -sliderRef.current.offsetWidth / slidesToShow,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="carousel-container" style={customStyle}>
            <div className="carousel-header">
                <h2>{heading}</h2>
                <div className="carousel-navigation-buttons">
                    <button 
                        onClick={handlePrev} 
                        disabled={isFirstSlide} 
                        aria-label="Previous Slide"
                    >
                        {"<"}
                    </button>
                    <button 
                        onClick={handleNext} 
                        disabled={isLastSlide} 
                        aria-label="Next Slide"
                    >
                        {">"}
                    </button>
                </div>
            </div>

            <div className="slides-container" ref={sliderRef} onScroll={handleScroll}>
                <div className="slides">
                    {slidesData.map((item, index) => (
                        <div key={item.id} className="slide">
                            <div className="slide-image-container">
                                <img src={item.src} alt="Slide" loading="lazy" />
                            </div>
                            <div className="slide-content-overlay">
                                {item.title && <p className='slide-title'>{item.title}</p>} 
                                <p className="slide-content">{item.content}</p>
                                <button className="slide-button">{item.buttonText}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
