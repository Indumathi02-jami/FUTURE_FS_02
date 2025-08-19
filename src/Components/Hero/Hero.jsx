import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero from '../Assets/hero_image.png'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      {/* 🔍 Search Section (outside hero flexbox) */}
      <div className="hero-search-top">
        <input type="text" placeholder="Search for Men, Women, Kids..." />
        <button>Search</button>
      </div>

      {/* Hero Flex Section */}
      <div className='hero'>
        {/* Left Side */}
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hand-icon">
              <p>NEW</p>
              <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collections</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
