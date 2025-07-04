import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-5 left-0 w-[96vw] z-50 left-[2vw] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 md:hidden"></div>

        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-green-600">About Us</a>
          <a href="#about" className="hover:text-green-600">News</a>
          <a href="#services" className="hover:text-green-600">Services</a>
          <a href="#team" className="hover:text-green-600">Our Team</a>
          <a href="#enquiry" className="hover:text-green-600">Make Enquiry</a>
        </div>

        <div className="hidden md:block">
          <button className="border border-gray-700 px-4 py-1 rounded hover:bg-gray-100">
                       {"Contact Us ->"}

          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              // Close icon SVG
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon SVG
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <a href="#about" className="block text-gray-700 hover:text-green-600">About</a>
          <a href="#services" className="block text-gray-700 hover:text-green-600">Services</a>
          <a href="#team" className="block text-gray-700 hover:text-green-600">Our Team</a>
          <a href="#enquiry" className="block text-gray-700 hover:text-green-600">Make Enquiry</a>
          <button className="mt-2 w-full border border-gray-700 px-4 py-1 rounded hover:bg-gray-100">
            {"Contact Us ->"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
