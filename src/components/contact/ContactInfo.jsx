import React from 'react';

function ContactInfo() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Address</h3>
        <p className="text-gray-600">korowe Market, kisumu-Ahero Highway</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
        <p className="text-gray-600">Emergency: +2547 59 003 943</p>
        <p className="text-gray-600">Reception: +2547 68 361 772 </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
        <p className="text-gray-600">info@abalahealthcenter.com</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
        <p className="text-gray-600">Emergency: 24/7</p>
        <p className="text-gray-600">Outpatient: Mon-Fri 8:00 AM - 8:00 PM</p>
        <p className="text-gray-600">Weekends: 9:00 AM - 5:00 PM</p>
      </div>
    </div>
  );
}

export default ContactInfo;