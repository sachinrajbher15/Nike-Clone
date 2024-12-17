import React, { useState } from 'react';
import ClassicsSpotlightData from './ClassicsSpotlightData.js';
import '../ClassicsSpotlight/ClassicsSpotlight.css'

function ClassicsSpotlight() {
    const totalImages = ClassicsSpotlightData.length;
    const [currIndex, setCurrentIndex] = useState(1); // Start at the first image

    function handlePrev() {
        setCurrentIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : totalImages));
    }

    function handleNext() {
        setCurrentIndex((prevIndex) => (prevIndex < totalImages ? prevIndex + 1 : 1)); // Wrap back to 1
    }

    return (
        <div className="spotlight-container">
            <div className="spotlight-header">
                <h2>Classics Spotlight</h2>
            </div>
            <button className="spotlight-counter">
                    {currIndex}/{totalImages}
                </button>
            <div className="spotlight-slider">
                <div className="spotlight-slides">
                    {ClassicsSpotlightData.map((item, index) => (
                        <div className="spotlight-slide" key={index}>
                            <img
                                className="spotlight-slide-image"
                                src={item.src}
                                alt="Spotlight Image"
                            />
                            <p className="spotlight-slide-content">{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className="spotlight-slider-navigation-buttons">
                    <button onClick={handlePrev}>{"<"}</button>
                    <button onClick={handleNext}>{">"}</button>
                </div>
            </div>
        </div>
    );
}

export default ClassicsSpotlight;
