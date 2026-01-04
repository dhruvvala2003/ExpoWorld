import React from 'react';
import AnimatedSection from '../component/AnimatedSection';

const products = [
  {
    name: 'Dehydrated White Onion',
    description: 'Available in flakes, minced, and powder form.',
    image: 'https://via.placeholder.com/300x200/F5DEB3/000000?Text=Onion'
  },
  {
    name: 'Dehydrated Red Onion',
    description: 'Adds a rich color and flavor to your dishes.',
    image: 'https://via.placeholder.com/300x200/E9967A/000000?Text=Red+Onion'
  },
  {
    name: 'Dehydrated Garlic',
    description: 'A staple in every kitchen, available in various forms.',
    image: 'https://via.placeholder.com/300x200/F5F5DC/000000?Text=Garlic'
  },
  {
    name: 'Spices',
    description: 'A wide range of spices to elevate your culinary creations.',
    image: 'https://via.placeholder.com/300x200/D2B48C/000000?Text=Spices'
  },
  {
    name: 'Seasonal Vegetables',
    description: 'A selection of seasonal vegetables, dehydrated for a longer shelf life.',
    image: 'https://via.placeholder.com/300x200/9ACD32/000000?Text=Vegetables'
  },
    {
    name: 'Dehydrated Green Onion',
    description: 'Adds a rich color and flavor to your dishes.',
    image: 'https://via.placeholder.com/300x200/9ACD32/000000?Text=Green+Onion'
  },
];

const ProductsPage = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title">Our Products</h1>
        <AnimatedSection>
          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-4" key={index}>
                <div className="card product-card">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ProductsPage;
