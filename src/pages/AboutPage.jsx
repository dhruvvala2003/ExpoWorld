import React from 'react';
import { Target, Eye, Award, Leaf, Users } from 'lucide-react';
import AnimatedSection from '../component/AnimatedSection';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-container">
        
        {/* Hero Section */}
        <section className="about-hero">
          <AnimatedSection>
            <h1 className="hero-title">Our Heritage, <br/><span>Your Future.</span></h1>
            <p className="hero-subtitle">Over 40 years of excellence in dehydrated food ingredients.</p>
          </AnimatedSection>
        </section>

        {/* Journey Section - Now with Hover Effect */}
        <AnimatedSection>
          <div className="story-card hover-trigger">
            <div className="story-content">
              <h2>The ExpoWorld Journey</h2>
              <p>
                ExpoWorld is a family-owned business with over 40 years of experience in the food ingredient industry. 
                We started with a small farm and a big dream: to provide the best quality dehydrated ingredients to the world.
              </p>
              <p>
                Today, we are a global leader in the industry, with a network of farms, processing facilities, 
                and distribution centers across the globe.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-item"><span>40+</span><p>Years Experience</p></div>
              <div className="stat-item global-stat"><span>Global</span><p>Distribution</p></div>
            </div>
          </div>
        </AnimatedSection>

        {/* Vision & Mission - Now with Hover Effects */}
        <div className="vision-mission-grid">
          <div className="glass-card vision-hover">
            <div className="icon-box"><Eye size={30} color="white" /></div>
            <h3>Our Vision</h3>
            <p>To be the world's leading supplier of dehydrated food ingredients, known for our quality, reliability, and innovation.</p>
          </div>

          <div className="glass-card mission-hover">
            <div className="icon-box"><Target size={30} color="white" /></div>
            <h3>Our Mission</h3>
            <p>To provide clients with highest quality products and competitive pricing while maintaining ethical sourcing standards.</p>
          </div>
        </div>

        {/* Why Choose Us - Enhanced Rectangle Hover Effect */}
        <section className="values-section">
          <h2 className="section-label">Why Choose Us</h2>
          <div className="values-grid">
            <div className="value-card">
              <Leaf className="v-icon" size={32} />
              <h4>Sustainability</h4>
              <p>Committed to ethical sourcing and responsible harvesting processes.</p>
            </div>
            <div className="value-card">
              <Award className="v-icon" size={32} />
              <h4>Quality</h4>
              <p>Exceptional standards that define global benchmarks in food safety.</p>
            </div>
            <div className="value-card">
              <Users className="v-icon" size={32} />
              <h4>Partnership</h4>
              <p>We work as your most trusted and reliable ingredient partner.</p>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default AboutPage;