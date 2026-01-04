import React from 'react';
import Hero from '../component/Hero';
import About from '../component/About';
import Specialities from '../component/Specialities';
import Certificates from '../component/Certificates';
import ProductHighlight from '../component/ProductHighlight';
import AnimatedSection from '../component/AnimatedSection';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Specialities />
      </AnimatedSection>
      <AnimatedSection>
        <Certificates />
      </AnimatedSection>
      <AnimatedSection>
        <ProductHighlight />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
