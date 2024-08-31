import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-gray-100 text-center mt-12 py-2">
      <h2 className="lg:text-2xl font-bold">Thanks for Visiting!</h2>
      <p className="lg:text-lg sm:text-sm italic">We hope you find your perfect meal.</p>
      <div className="mt-1">
        <span className="animate-bounce inline-block mx-1">🍴</span>
        <span className="animate-bounce inline-block mx-1">🍔</span>
        <span className="animate-bounce inline-block mx-1">🍕</span>
        <Link to="/" className="text-yellow-400 hover:text-yellow-300 underline">
        Back to Home
      </Link>
      </div>
    </footer>
  );
};

export default Footer;
