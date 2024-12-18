import React from 'react';
import DepartmentCard from '../components/departments/DepartmentCard';

function Departments() {
  const departments = [
    {
      name: "Emergency Department",
      description: "24/7 emergency medical care for critical conditions",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Internal Medicine",
      description: "Comprehensive care for adult diseases and conditions",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Obstetrics & Gynecology",
      description: "Complete women's health and maternity care",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Surgery",
      description: "Advanced surgical procedures and post-operative care",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h1>
          <p className="text-lg text-gray-600">
            Specialized medical departments providing expert care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <DepartmentCard key={index} {...dept} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;