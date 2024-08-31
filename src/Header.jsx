import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-black via-gray-900 to-gray-800 bg-cover bg-center h-[200px]  text-white relative" >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <h1 className=" font-bold lg:text-5xl sm:text-2xl text-white shadow-lg">Welcome to FeedMe </h1>
        <p className="lg:text-xl sm:text-sm">A Dungeon of delicious flavors</p>
        <Link to="/" className="mt-4 lg:px-6 sm:px-2 sm:py-2 lg:py-2 bg-white text-black font-bold rounded shadow-lg hover:bg-yellow-600 transition">
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;
