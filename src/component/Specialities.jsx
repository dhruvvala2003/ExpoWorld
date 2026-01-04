import React from 'react';

const Specialities = () => {
  return (
    <div className="specialities-section">
      <div className="container">
        <h2 className="section-title">Our Specialities</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Ozone Washing</h5>
                <p className="card-text">Our ingredients are treated with ozone washing to ensure maximum purity and safety.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">With 0% Foreign Bodies</h5>
                <p className="card-text">We guarantee our products are free from any foreign materials through a rigorous sorting process.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Quality Assured</h5>
                <p className="card-text">Every batch is tested in our in-house labs to meet the highest quality standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
