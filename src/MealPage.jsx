import React, { useState, useEffect, useContext } from 'react';
import { FoodContext } from './FoodContext';
import FoodCard from './FoodCard';

const MealPage = ({ type }) => {
  const { food } = useContext(FoodContext);
  const [filteredFood, setFilteredFood] = useState([]);

  useEffect(() => {
    const filtered = food.filter((item) => item.type === type);
    setFilteredFood(filtered);
  }, [food, type]);

  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h2 className="text-4xl font-bold text-white mb-8">{type}</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {filteredFood.map((item) => (
           <div key={item.id} className="opacity-0 animate-fadeIn">
           <FoodCard food={item} className="transform transition-transform duration-300 hover:scale-105" />
         </div>
        ))}
      </div>
    </div>
  );
};

export default MealPage;
