import React from 'react';

function EventGallery() {
  const events = [
    {
      id: 1,
      image: "/WhatsApp Image 2024-12-28 at 20.06.12_24590f0b.jpg",
      title: "Community Health Day",
      description: "Local community members gathering under tents for health awareness program"
    },
    {
      id: 2,
      image: "/public/WhatsApp Image 2024-12-28 at 20.06.13_0f3ad3c5.jpg",
      title: "Medical Supplies Distribution",
      description: "Distribution of essential medical supplies and equipment"
    },
    {
      id: 3,
      image: "/public/WhatsApp Image 2024-12-28 at 20.51.18_b0d3f1af.jpg",
      title: "Health Champions Awards",
      description: "Recognition ceremony for outstanding community health workers"
    },
    {
      id: 4,
      image: "/public/WhatsApp Image 2024-12-28 at 20.51.19_abbb67b9.jpg",
      title: "Free Health Screening",
      description: "Community members receiving free health check-ups and consultations"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {events.map((event) => (
        <div key={event.id} className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6 bg-white">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventGallery;
