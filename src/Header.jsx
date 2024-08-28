import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-black via-gray-900 to-gray-800 bg-cover bg-center h-[500px] text-white relative" >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold text-white shadow-lg">Welcome to FeedMe </h1>
        <p className="text-xl">A Dungeon of delicious flavors</p>
        <Link to="/" className="mt-4 px-6 py-2 bg-yellow-500 text-black font-bold rounded shadow-lg hover:bg-yellow-600 transition">
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;
