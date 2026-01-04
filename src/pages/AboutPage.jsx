import React from 'react';
import AnimatedSection from '../component/AnimatedSection';

const AboutPage = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">About ExpoWorld</h1>
        <AnimatedSection>
          <div className="row">
            <div className="col-md-12">
              <p>ExpoWorld is family-owned business with over 40 years of experience in the food ingredient industry. We started with a small farm and a big dream: to provide the best quality dehydrated ingredients to the world. Today, we are a global leader in the industry, with a network of farms, processing facilities, and distribution centers across the globe.</p>
              <p>Our mission is to be the most trusted partner for our clients, providing them with the highest quality products, exceptional service, and competitive pricing. We are committed to sustainability and ethical sourcing, and we work closely with our farmers to ensure that our products are grown and harvested in a responsible manner.</p>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="row">
            <div className="col-md-6">
              <h3>Our Vision</h3>
              <p>To be the world's leading supplier of dehydrated food ingredients, known for our quality, reliability, and innovation.</p>
            </div>
            <div className="col-md-6">
              <h3>Our Mission</h3>
              <p>To provide our clients with the highest quality products, exceptional service, and competitive pricing, while maintaining our commitment to sustainability and ethical sourcing.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;
