import React from 'react';

function EventGallery() {
  const events = [
    {
      id: 1,
      image: "/images/events/community-gathering.jpg",
      title: "Community Health Day",
      description: "Local community members gathering under tents for health awareness program"
    },
    {
      id: 2,
      image: "/images/events/medical-supplies.jpg",
      title: "Medical Supplies Distribution",
      description: "Distribution of essential medical supplies and equipment"
    },
    {
      id: 3,
      image: "/images/events/awards-ceremony.jpg",
      title: "Health Champions Awards",
      description: "Recognition ceremony for outstanding community health workers"
    },
    {
      id: 4,
      image: "/images/events/health-screening.jpg",
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
