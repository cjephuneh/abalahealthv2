import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/services/ServiceCard';

function Home() {
  const services = [
    {
      title: "Inpatient Care",
      description: "24/7 comprehensive care for patients requiring hospitalization",
      icon: "🏥"
    },
    {
      title: "Outpatient Services",
      description: "Convenient medical care without hospital admission",
      icon: "👨‍⚕️"
    },
    {
      title: "Maternity Care",
      description: "Complete pregnancy and childbirth services",
      icon: "👶"
    },
    {
      title: "Laboratory",
      description: "Advanced diagnostic and testing facilities",
      icon: "🔬"
    },
    {
      title: "Pharmacy",
      description: "Full-service pharmacy with prescription medications",
      icon: "💊"
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency medical services",
      icon: "🚑"
    }
  ];

  const stats = [
    { number: "20+", label: "Years of Excellence" },
    { number: "50+", label: "Medical Experts" },
    { number: "10k+", label: "Patients Served" },
    { number: "24/7", label: "Emergency Care" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your Health Is Our
                <span className="block text-primary-200">Top Priority</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Welcome to Abala Health Center, where we combine advanced medical technology
                with compassionate care to ensure your well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition duration-300"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition duration-300"
                >
                  Our Services
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Medical team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Medical Services
            </h2>
            <p className="text-xl text-gray-600">
              We offer a wide range of medical services to meet all your healthcare needs
              under one roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Experience Better Healthcare?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition duration-300"
          >
            Schedule an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;