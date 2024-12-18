import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Abala Health Center</h3>
            <p className="text-gray-400">
              Providing quality healthcare services to our community since 1970.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-400 hover:text-white">Departments</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Inpatient Care</li>
              <li className="text-gray-400">Outpatient Services</li>
              <li className="text-gray-400">Maternity Care</li>
              <li className="text-gray-400">Laboratory Services</li>
              <li className="text-gray-400">Pharmacy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>korowe Market, kisumu-Ahero Highway</li>
              <li>Medical District</li>
              <li>Phone: +2547 59 003 943</li>
              <li>Emergency: +2547 68 361 772</li>
              <li>info@abalahealthcenter.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abala Health Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;