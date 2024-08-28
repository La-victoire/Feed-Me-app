// src/FoodDetail.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FoodContext } from './FoodContext';

const FoodDetail = () => {
  const { id } = useParams();
  const { food } = useContext(FoodContext);

  const item = food.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p>Food item not found!</p>;
  }

  return (
    <div className="max-w-[800px] mx-auto p-4">
      <h1 className="text-3xl font-bold">{item.name}</h1>
      <p className="mt-4">{item.description}</p>
      <h2 className="text-2xl font-semibold mt-4">Ingredients:</h2>
      <ul className="list-disc ml-5">
        {item.ingredients && item.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodDetail;
