import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-500 via-grey-500 to-black-500 text-gray-400 text-center mt-12 py-6">
      <h2 className="text-2xl font-bold">Thanks for Visiting!</h2>
      <p className="text-lg italic">We hope you find your perfect meal.</p>
      <div className="mt-4">
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
