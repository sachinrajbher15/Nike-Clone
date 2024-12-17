import React from 'react';
import '../ContentSection/ContentSection.css';

function ContentSection({ title, heading, description, buttonText }) {
  return (
    <div className="content-section">
      <p className="content-title">{title}</p>
      <h1 className="content-heading">{heading}</h1>
      <p className="content-description">{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default ContentSection;
