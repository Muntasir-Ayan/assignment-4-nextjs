import React from 'react';

interface RoomAndBedProps {
  hotelData?: {
    bedrooms: {
      name: string;
      bedType: string;
    }[];
    sleeps: number;
    spaces: string[];
    propertyDescription: string;
    propertyTitle: string;
    locationHighlights: {
      outdoors: string;
      thingsToDo: string;
    };
  };
}

const RoomAndBed: React.FC<RoomAndBedProps> = ({ hotelData }) => {
  const defaultData = {
    bedrooms: [
      { name: 'Bedroom 1', bedType: '1 Queen Bed' },
      { name: 'Bedroom 2', bedType: '1 Twin Bed' },
    ],
    sleeps: 4,
    spaces: ['Deck or patio', 'Kitchen', 'Balcony', 'Garden'],
    propertyDescription:
      'Escape to the mountains and experience the great outdoors at this lovely Juneau vacation rental! Perched on the shore...',
    propertyTitle: 'Juneau Vacation Home: Stunning View + Beach Access',
    locationHighlights: {
      outdoors: 'Lena Cove (on-site), Lena Beach Recreation Area (0.5 miles)...',
      thingsToDo: 'Mendenhall Golf (8 miles), Dimond Park Aquatic Center (8 miles)...',
    },
  };

  const data = hotelData || defaultData;

  return (
    <div className="container mx-auto">
      {/* Rooms and Beds Section */}
      <section className="mb-10 border-b border-gray-300 pb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Rooms & Beds</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-700 mb-1">
            {data.bedrooms.length} Bedrooms
          </h3>
          <div className="text-sm text-gray-500">(Sleeps {data.sleeps})</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.bedrooms.map((bedroom, index) => (
            <div key={index}>
              <h4 className="text-base font-medium text-gray-700 mb-2">{bedroom.name}</h4>
              <div>🛏️ {bedroom.bedType}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Spaces Section */}
      <section className="mb-10 border-b border-gray-300 pb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Spaces</h2>
        <ul className="list-none space-y-4">
          {data.spaces.map((space, index) => (
            <li key={index} className="flex items-center gap-3">
              <span>🏠</span> {space}
            </li>
          ))}
        </ul>
        <a href="#" className="text-blue-500 text-sm underline">
          See all rooms and beds details
        </a>
      </section>

      {/* About This Property */}
      <section className="mb-10 border-b border-gray-300 pb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">About This Property</h2>
        <h3 className="text-lg font-medium text-gray-700 mb-4">{data.propertyTitle}</h3>
        <p className="text-sm text-gray-600 mb-4">{data.propertyDescription}</p>
      </section>

      {/* Location */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Location</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-base font-medium text-gray-700 mb-2">Great Outdoors</h4>
            <p className="text-sm text-gray-600">{data.locationHighlights.outdoors}</p>
          </div>
          <div>
            <h4 className="text-base font-medium text-gray-700 mb-2">Things to Do</h4>
            <p className="text-sm text-gray-600">{data.locationHighlights.thingsToDo}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomAndBed;
