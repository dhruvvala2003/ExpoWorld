import React from 'react';

const ProductHighlight = () => {
  return (
    <div className="product-highlight-section">
      <div className="container">
        <h2 className="section-title">Product Highlight</h2>
        <div className="row">
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500x400/F5DEB3/000000?Text=Dehydrated+Onion" alt="Dehydrated White Onion" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>Dehydrated White Onion</h3>
            <p>
              Our dehydrated white onions are sourced from the finest farms and processed with care to retain their flavor and nutritional value. They are perfect for a wide range of applications, from soups and sauces to seasonings and snacks.
            </p>
            <ul>
              <li>Available in flakes, minced, and powder form</li>
              <li>Long shelf life</li>
              <li>Consistent quality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
