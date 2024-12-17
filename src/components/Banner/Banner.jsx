import React from 'react'
import './BannerSection.css'

function Banner() {
  return (
    <div className='banner-container'>
      <div className="banner-image">
        <img src="/images/banner.gif" alt="Banner Image" />
      </div>
      <div className="banner-quote-container">
        <h3 className='banner-heading'>Rafael Nadal</h3>
        <p className='banner-quote'>GREATNESS. IT ONLY TAKES EVERYTHING.</p>
        <button className="banner-button">Shop</button>
      </div>
    </div>
  )
}

export default Banner

