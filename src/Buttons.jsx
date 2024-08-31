import React from 'react';
import { Link } from 'react-router-dom';

function Buttons() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 flex flex-wrap justify-center gap-9">
      {["Breakfast", "Lunch", "Dinner", "Dessert"].map((type) => (
        <Link 
          key={type} 
          to={`/${type.toLowerCase()}`}
          className="lg:w-[200px] sm:w-[200px] sm:h-[80px] lg:h-[100px] bg-gradient-to-tl from-gray-800 via-gray-900 to-black text-white flex items-center justify-center text-2xl font-bold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-1"
        >
          {type}
        </Link>
      ))}
    </div>
  );
}

export default Buttons;
