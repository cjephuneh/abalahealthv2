import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary-600 text-xl font-bold">Abala Health Center</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-600">Services</Link>
            <Link to="/departments" className="text-gray-700 hover:text-primary-600">Departments</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
              Book Appointment
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Services</Link>
            <Link to="/departments" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Departments</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Contact</Link>
            <button className="w-full text-left px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;