import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li className="menu-item">
          <button className="menu-button" onClick={toggleMenu}>
            Products
          </button>
          {isMenuOpen && (
            <div className="mega-menu-content">
              <div className="mega-menu-category">
                <h3>Electronics</h3>
                <ul>
                  <li><a href="#">Mobile Phones</a></li>
                  <li><a href="#">Laptops</a></li>
                  <li><a href="#">Headphones</a></li>
                </ul>
              </div>
              <div className="mega-menu-category">
                <h3>Fashion</h3>
                <ul>
                  <li><a href="#">Men's Clothing</a></li>
                  <li><a href="#">Women's Clothing</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
