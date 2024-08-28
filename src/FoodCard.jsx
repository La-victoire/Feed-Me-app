import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food, className='' }) => {
  

  return (
    <div className={`max-w-[400px] h-[200px] bg-gradient-to-br from-dark-gray via-gray-800 to-dark-gray rounded-lg shadow-majestic hover:shadow-xl transition duration-300 ${className}`}>
      <Link to={`/food/${food.id}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-light-blue via-light-purple to-light-pink opacity-30 rounded-t-lg"></div>
        </div>
        <div className="p-4">
          <h3 className="text-white text-2xl font-bold mb-2">{food.name}</h3>
          <p className="text-gray-300 text-base">{food.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default FoodCard;
