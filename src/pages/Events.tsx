import React from 'react';
import EventHeader from '../components/events/EventHeader';
import EventGallery from '../components/events/EventGallery';

function Events() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EventHeader />
        <EventGallery />
      </div>
    </div>
  );
}

export default Events;