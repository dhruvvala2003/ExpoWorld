import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500x400/D3D3D3/000000?Text=Our+Team" alt="Who We Are" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Who We Are & Why Work With Us?</h2>
            <p>
              We are a leading B2B supplier of high-quality dehydrated food ingredients. With decades of experience in the industry, we pride ourselves on our commitment to quality, reliability, and customer satisfaction. Our global network allows us to source the best ingredients and deliver them to your doorstep.
            </p>
            <p>
              We believe in building long-term partnerships with our clients, offering them competitive pricing, consistent quality, and exceptional service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
