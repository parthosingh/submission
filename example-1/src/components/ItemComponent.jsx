// src/components/ItemComponent.jsx
import React from 'react';
import './ItemComponent.css';

const ItemComponent = ({ item, onAddToCart }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} className="item-image" />
      <h3 className="item-title">{item.title}</h3>
      <p className="item-price">Price: ${item.price}</p>
      <button className="add-to-cart-button" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemComponent;
