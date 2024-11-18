import React from 'react';

const AmenitiesAndPolicies: React.FC = () => {
  return (
    <div className="container max-w-4xl mx-auto">
      {/* Amenities */}
      <section className="mb-10 border-b border-gray-300 pb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Amenities</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <span>🍳</span> Kitchen
          </div>
          <div className="flex items-center gap-3">
            <span>🧺</span> Washer
          </div>
          <div className="flex items-center gap-3">
            <span>👕</span> Dryer
          </div>
          <div className="flex items-center gap-3">
            <span>🏡</span> Outdoor Space
          </div>
          <div className="flex items-center gap-3">
            <span>🅿️</span> Parking Available
          </div>
          <div className="flex items-center gap-3">
            <span>🌊</span> Ocean View
          </div>
        </div>
        <a href="#" className="text-blue-500 text-sm underline">See all 34 amenities</a>
      </section>

      {/* Policies */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Policies</h2>
        <ul className="list-disc pl-6 text-sm text-gray-600">
          <li>No smoking</li>
          <li>No pets allowed</li>
          <li>No events, parties, or large gatherings</li>
          <li>Must be at least 25 years old to book</li>
          <li>Additional fees and taxes may apply</li>
          <li>Photo ID may be required upon check-in</li>
        </ul>
      </section>
    </div>
  );
};

export default AmenitiesAndPolicies;
