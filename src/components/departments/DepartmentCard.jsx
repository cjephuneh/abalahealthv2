import React from 'react';

function DepartmentCard({ name, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default DepartmentCard;