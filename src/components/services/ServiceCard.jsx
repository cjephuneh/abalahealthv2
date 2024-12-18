import React from 'react';

function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-5xl mb-6 bg-primary-50 w-16 h-16 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default ServiceCard;