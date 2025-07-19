'use client';
import React from 'react';

const Navbar = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-indigo-600 dark:bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">

        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold tracking-wide">Recurring Date Picker</h1>
        </div>

        {/* Center Menu */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#download" className="hover:underline">Download</a>
          <a href="#premium" className="hover:underline">Premium</a>

          {/* Dropdown on hover */}
          <div className="relative group">
            <button className="hover:underline focus:outline-none">
              Resources ⌄
            </button>

            {/* Dropdown menu */}
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-black dark:bg-gray-800 dark:text-white shadow-lg rounded-md overflow-hidden z-10">
              <a
                href="#help"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Help Center
              </a>
              <a
                href="#guides"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Productivity Guides
              </a>
            </div>
          </div>
        </div>

        {/* Right Buttons */}
        <nav className="flex gap-4 items-center">
          <a href="/login" className="hover:underline">Login</a>
          <a href="/signup" className="hover:underline">Sign Up</a>
          <button
            onClick={toggleDarkMode}
            className="ml-2 bg-white text-black px-3 py-1 rounded hover:bg-gray-200 dark:bg-white dark:text-black"
          >
            🌙 Toggle
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
