// src/components/InfiniteScroll.jsx
import React, { useState, useEffect, useRef } from 'react';
import './InfiniteScroll.css';

const InfiniteScroll = ({ DataComponent, onAddToCart }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef();

  const fetchData = async (pageNumber) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=10&page=${pageNumber}`);
      const data = await response.json();
      setItems(prevItems => [...prevItems, ...data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const lastItemObserver = (entries) => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    };

    observer.current = new IntersectionObserver(lastItemObserver);
    const lastItem = document.querySelector('.last-item');
    if (lastItem) {
      observer.current.observe(lastItem);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [items]);

  return (
    <div className="items-container">
      {items.map((item) => (
        <DataComponent key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
      {isLoading && <p>Loading more items...</p>}
      <div className="last-item" />
    </div>
  );
};

export default InfiniteScroll;
