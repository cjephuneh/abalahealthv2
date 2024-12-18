import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

function Services() {
  const services = [
    {
      title: "Inpatient Services",
      description: "24/7 comprehensive care for patients requiring hospitalization",
      features: [
        "Private and semi-private rooms",
        "24/7 nursing care",
        "Specialized medical attention",
        "Nutritional support",
        "Recovery monitoring"
      ]
    },
    {
      title: "Outpatient Care",
      description: "Quality medical care without hospital admission",
      features: [
        "General consultations",
        "Preventive care",
        "Follow-up visits",
        "Minor procedures",
        "Health screenings"
      ]
    },
    {
      title: "Maternity Services",
      description: "Complete pregnancy and childbirth care",
      features: [
        "Prenatal care",
        "Labor and delivery",
        "Postnatal care",
        "Newborn care",
        "Breastfeeding support"
      ]
    },
    {
      title: "Laboratory Services",
      description: "Comprehensive diagnostic testing",
      features: [
        "Blood tests",
        "Urine analysis",
        "Pathology services",
        "Diagnostic imaging",
        "Quick results reporting"
      ]
    },
    {
      title: "Pharmacy Services",
      description: "Full-service pharmacy for all your medication needs",
      features: [
        "Prescription medications",
        "Over-the-counter drugs",
        "Medication counseling",
        "Refill services",
        "Health supplies"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            Comprehensive healthcare services tailored to your needs
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;