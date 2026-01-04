import React from 'react';

const Certificates = () => {
  return (
    <div className="certificates-section">
      <div className="container">
        <h2 className="section-title">Our Certificates</h2>
        <div className="certificates-grid">
          <img src="https://via.placeholder.com/200x150/A9A9A9/000000?Text=ISO+9001" alt="Certificate" />
          <img src="https://via.placeholder.com/200x150/A9A9A9/000000?Text=FSSC+22000" alt="Certificate" />
          <img src="https://via.placeholder.com/200x150/A9A9A9/000000?Text=BRC+Certified" alt="Certificate" />
          <img src="https://via.placeholder.com/200x150/A9A9A9/000000?Text=Organic" alt="Certificate" />
          <img src="https://via.placeholder.com/200x150/A9A9A9/000000?Text=Kosher" alt="Certificate" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
