import React from 'react';
import ContentSection from '../ReusableComponents/ContentSection/ContentSection.jsx';
import '../DontMiss/DontMissSection.css';

function DontMissSection() {
  return (
    <div className="dont-miss-container">
      <div className="dont-miss-header">
        <h2>Don't Miss</h2>
      </div>
      <div className="dont-miss-collage">
        <img src="https://i.pinimg.com/736x/4d/ef/ab/4defab87bb669dbe3ce8d88d78e6570b.jpg" alt="" />
        <img src="https://i.pinimg.com/736x/f7/e4/6e/f7e46ed79c0801a3856412e2b4e63718.jpg" alt="" />
      </div>
      <ContentSection
        title="Tatum 3"
        heading="ZERO PRESSURE"
        description="It's cool for others to crash out but Jayson Tatum keeps that energy reserved for continuing to master the game. With its smooth grey color blocking and out-the-box, ready-to-play feel, the 'Zen' is inspired by Jayson's blend of cool demeanor and ferocious on-court abilities."
        buttonText="Shop"
      />
    </div>
  );
}

export default DontMissSection;
