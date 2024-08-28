import React, { createContext, useState, useEffect } from 'react';

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [food, setFood] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https:/api/');
        const data = await response.json();
        if (Array.isArray(data)) {
          setFood(data);
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <FoodContext.Provider value={{ food }}>
      {children}
    </FoodContext.Provider>
  );
};
