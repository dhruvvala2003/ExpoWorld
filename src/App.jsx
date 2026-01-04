import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import './App.css';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <LayoutContent />
    </Router>
  );
}

const LayoutContent = () => {
  const location = useLocation();
  
  // Define paths where you DON'T want the Navbar and Footer
  const hideNavbarFooter = location.pathname === '/login';

  return (
    <>
      {/* Only show Navbar if not on login page */}
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Only show Footer if not on login page */}
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

export default App;