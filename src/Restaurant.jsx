import React from "react";
import Search from "./App";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Buttons  from "./Buttons";
import FoodDetail from './FoodDetail';
import { FoodProvider } from './FoodContext';
import MealPage from "./MealPage";
import Footer from "./Footer";

export const Restaurant = () => {
  return (
    <div className=" bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white font-roboto min-h-screen flex flex-col justify-between">
      <Router>
        <FoodProvider>
        <Header />
          <Routes>
            <Route path="/" element={ <> <Search/>  <Buttons /></>} />
            <Route path="/breakfast" element={<MealPage type="Breakfast" />} />
            <Route path="/lunch" element={<MealPage type="Lunch" />} />
            <Route path="/dinner" element={<MealPage type="Dinner" />} />
            <Route path="/dessert" element={<MealPage type="Dessert" />} />
            <Route path="/food/:id" element={<FoodDetail />} />
          </Routes>
          <Footer />
        </FoodProvider>
      </Router>
    </div>
  );
};
