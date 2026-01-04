import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
