import React, { useEffect, useState } from 'react';
import '../HeroSection/HeroSection.css';
import heroData from './HeroSectionData';

function HeroSection() {
  const [currentData, setCurrentData] = useState(heroData[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData(prevData => {
        return prevData.id === 1 ? heroData[1] : heroData[0];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero-section'>
      <div className='hero-section-content'>
        <p>{currentData.description}</p>
        <button>{currentData.btnText}</button>
      </div>
    </div>
  );
}

export default HeroSection;
