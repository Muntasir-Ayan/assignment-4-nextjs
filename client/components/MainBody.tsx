'use client';

import React, { useState, useEffect } from 'react';

interface MainBodyProps {
  hotelData?: {
    title: string;
    description: string;
    guest_count: number;
    bedroom_count: number;
    bathroom_count: number;
    amenities: string[];
    address: string;
  };
}

const MainBody: React.FC<MainBodyProps> = ({ hotelData }) => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const totalCount = adultCount + childCount;

  const updateCount = (type: 'adult' | 'child', delta: number) => {
    if (type === 'adult') {
      setAdultCount((prev) => Math.max(0, prev + delta));
      if (adultCount === 0) setChildCount(0); // Reset children if no adults
    } else if (type === 'child' && adultCount > 0) {
      setChildCount((prev) => Math.max(0, prev + delta));
    }
  };

  // Fallback values if hotelData is not available
  const defaultTitle = 'Juneau Vacation Home: Stunning View + Beach Access';
  const defaultDescription = 'A beautiful vacation home with stunning views and beach access.';
  const defaultGuestCount = 4;
  const defaultBedroomCount = 2;
  const defaultBathroomCount = 1;
  const defaultAmenities = ['Barbecue grill', 'Outdoor Space', 'Kitchen', 'Washer', 'Parking available', 'Dryer'];
  const defaultAddress = 'Juneau, Alaska';

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          {/* Title and Description */}
          <h1 className="text-2xl font-bold">
            {hotelData?.title || defaultTitle}
          </h1>
          <p className="text-gray-600">
            {hotelData?.description || defaultDescription}
          </p>

          {/* Guest and Property Info */}
          <div className="grid grid-cols-2 mt-4">
            <div>
              <p>Bedrooms: {hotelData?.bedroom_count || defaultBedroomCount}</p>
              <p>Sleeps {hotelData ? hotelData.guest_count : defaultGuestCount}</p>
            </div>
            <div>
              <p>Bathrooms: {hotelData?.bathroom_count || defaultBathroomCount}</p>
              <p>Location: {hotelData?.address || defaultAddress}</p>
            </div>
          </div>

          {/* Amenities */}
          <h3 className="mt-4">Popular amenities</h3>
          <ul className="grid grid-cols-2 list-disc ml-5">
            {(hotelData?.amenities || defaultAmenities).map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <a href='#' className='text-blue-400'>See all property amenities</a>

          {/* Explore the area */}
          <h3 className="mt-4">Explore the area</h3>
          <div className="grid grid-cols-2">
            <div>
              <div>
                <h1>Map</h1>
              </div>
              <div className="location-name">{hotelData?.address || defaultAddress}</div>
              <a href="#" className="view-map-link">View in a map</a>
            </div>
            <div>
              <ul className="list-disc ml-5">
                {/* You can populate this dynamically if `hotelData?.nearbyPlaces` is available */}
                <li>Auke Bay - 6 min drive</li>
                <li>University of Alaska-Southeast - 10 min drive</li>
                <li>Mendenhall Golf Course - 14 min drive</li>
                <li>Juneau, AK (JNU-Juneau Intl.) - 14 min drive</li>
              </ul>
            </div>
          </div>
          <a href='#' className='text-blue-400'>See all Properties amenities</a>
        </div>

        <div>
          {/* Booking Section */}
          <div className="bg-blue-800 text-white p-4 rounded mt-6">
            <h2 className="text-lg">Price: $134 per night</h2>
            <button 
              onClick={() => setShowPopup(true)} 
              className="mt-2 bg-blue-500 p-2 rounded"
            >
              Book now
            </button>
          </div>

          {/* Popup for traveler count */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded">
                <h3>Travelers</h3>
                <div className="flex justify-between mt-2">
                  <span>Adults:</span>
                  <button onClick={() => updateCount('adult', -1)}>-</button>
                  {adultCount}
                  <button onClick={() => updateCount('adult', 1)}>+</button>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Children:</span>
                  {adultCount > 0 && (
                    <>
                      <button onClick={() => updateCount('child', -1)}>-</button>
                      {childCount}
                      <button onClick={() => updateCount('child', 1)}>+</button>
                    </>
                  )}
                </div>
                <button 
                  onClick={() => setShowPopup(false)} 
                  className="mt-4 bg-gray-300 p-2 rounded"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainBody;
