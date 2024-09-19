// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InfiniteScroll from './components/InfiniteScroll';
import ItemComponent from './components/ItemComponent';
import './App.css';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="app-container">
      <Navbar />
      <br/>  <br/>  <br/> <br/>  <br/>  <br/> <br/>  
      <h1>Infinite Scroll Shopping Cart</h1>
      <p>Items in cart: {cartCount}</p>
      <InfiniteScroll DataComponent={ItemComponent} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
