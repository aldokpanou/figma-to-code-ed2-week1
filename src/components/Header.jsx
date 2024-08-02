import React, { useState } from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg'; // Add a close icon

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-5 px-4 sm:px-20 bg-white border-b border-[#E8E9EA] font-semibold">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" />
        <nav className="hidden xl:flex">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Top sales</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Collections</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Our blog</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">About us</a></li>
          </ul>
        </nav>
        <div className="hidden xl:flex space-x-2">
          <button className="px-4 py-2">Sign Up</button>
          <button className="bg-[#0E1218] text-white border border-gray-700 px-4 py-2 rounded-full">Connect Wallet</button>
        </div>
        <div className="xl:hidden">
          <button onClick={toggleMenu}>
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="flex justify-end">
            <button onClick={toggleMenu}>
              <img src={close} alt="close" />
            </button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-700 hover:text-gray-900 block">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 block">Top sales</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 block">Collections</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 block">Our blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 block">About us</a></li>
            </ul>
            <div className="mt-8 flex flex-col space-y-2">
              <button className="px-4 py-2">Sign Up</button>
              <button className="bg-[#0E1218] text-white border border-gray-700 px-4 py-2 rounded-full">Connect Wallet</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
