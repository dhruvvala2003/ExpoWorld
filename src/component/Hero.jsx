import React, { useState, useEffect } from 'react';

const images = [
  "url('https://via.placeholder.com/1920x1080/FFC0CB/000000?Text=Dehydrated+Onions')",
  "url('https://via.placeholder.com/1920x1080/ADD8E6/000000?Text=Dehydrated+Garlic')",
  "url('https://via.placeholder.com/1920x1080/90EE90/000000?Text=Spices')"
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: image }}
          ></div>
        ))}
      </div>
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Premium Quality Dehydrated Ingredients</h1>
          <p>Your trusted partner for sourcing and transporting the finest food ingredients.</p>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
