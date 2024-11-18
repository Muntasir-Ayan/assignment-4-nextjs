import React from 'react';

const RoomAndBed: React.FC = () => {
  return (
    <div className="container mx-auto">
      {/* Rooms and Beds Section */}
      <section className="mb-10 border-b border-gray-300 pb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Rooms & Beds</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-700 mb-1">2 Bedrooms</h3>
          <div className="text-sm text-gray-500">(Sleeps 4)</div>
        </div>
        <div className="flex justify-between">
          <div>
            <h4 className="text-base font-medium text-gray-700 mb-2">Bedroom 1</h4>
            <div>🛏️ 1 Queen Bed</div>
          </div>
          <div>
            <h4 className="text-base font-medium text-gray-700 mb-2">Bedroom 2</h4>
            <div>🛏️ 1 Twin Bed</div>
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="mb-10 border-b border-gray-300 pb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Spaces</h2>
        <ul className="list-none space-y-4">
          <li className="flex items-center gap-3">
            <span>🏊</span> Deck or patio
          </li>
          <li className="flex items-center gap-3">
            <span>🍳</span> Kitchen
          </li>
          <li className="flex items-center gap-3">
            <span>🏠</span> Balcony
          </li>
          <li className="flex items-center gap-3">
            <span>🌳</span> Garden
          </li>
        </ul>
        <a href="#" className="text-blue-500 text-sm underline">See all rooms and beds details</a>
      </section>

      {/* About This Property */}
      <section className="mb-10 border-b border-gray-300 pb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">About This Property</h2>
        <h3 className="text-lg font-medium text-gray-700 mb-4">Juneau Vacation Home: Stunning View + Beach Access</h3>
        <p className="text-sm text-gray-600 mb-4">
          Escape to the mountains and experience the great outdoors at this lovely Juneau vacation rental! Perched on the shore...
        </p>
      </section>

      {/* Location */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Location</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-base font-medium text-gray-700 mb-2">Great Outdoors</h4>
            <p className="text-sm text-gray-600">Lena Cove (on-site), Lena Beach Recreation Area (0.5 miles)...</p>
          </div>
          <div>
            <h4 className="text-base font-medium text-gray-700 mb-2">Things to Do</h4>
            <p className="text-sm text-gray-600">Mendenhall Golf (8 miles), Dimond Park Aquatic Center (8 miles)...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomAndBed;
