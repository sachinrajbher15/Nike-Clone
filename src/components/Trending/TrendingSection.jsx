import React from 'react';
import ContentSection from '../ReusableComponents/ContentSection/ContentSection.jsx';
import '../Trending/TrendingSection.css';

function TrendingSection() {
  return (
    <div className="trending-container">
      <div className="trending-header">
        <h2>Trending</h2>
      </div>
      <div className="tending-collage">
        <div className="collage-left">
          <img src="https://i.pinimg.com/736x/4e/f9/26/4ef926ba81ebb9f8b9a0569db20556a2.jpg" alt="" />
        </div>
        <div className="collage-right">
          <img src="https://i.pinimg.com/736x/9c/72/54/9c7254e2a09b7894eb3a7d11a8f1fbb0.jpg" alt="" />
          <img src="https://i.pinimg.com/736x/60/07/51/6007515c5157f211c3729805bd092d04.jpg" alt="" />
        </div>
      </div>
      <ContentSection
        title="Just In"
        heading="VOMERO ROAM"
        description="Form meets function with the weatherised Vomero Roam—an all-season staple that delivers a comfortable stride and keeps you ready for whatever, no matter the weather."
        buttonText="Shop"
      />
    </div>
  );
}

export default TrendingSection;
