'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import BookingCard from './SideBar';

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
                <Image
                  src="/map.jpeg"
                  alt="Vacation Image"
                  width={800} // Adjust the width as per your design
                  height={600} // Adjust the height as per your design
                  layout="responsive" // Optional, use 'intrinsic' or 'fill' based on your design
                />
              </div>
              <div className="location-name">{hotelData?.address || defaultAddress}</div>
              <a href="#" className="view-map-link">View in a map</a>
            </div>
            <div>
              <ul className="list-disc ml-5">
                {/* You can populate this dynamically if `hotelData?.nearbyPlaces` is available */}
                <li>Auke Bay    -        6 min drive</li>
                <li>University of Alaska-Southeast    -        10 min drive</li>
                <li>Mendenhall Golf Course    -        14 min drive</li>
                <li>Juneau, AK (JNU-Juneau Intl.)    -        14 min drive</li>
              </ul>
            </div>
          </div>
          <a href='#' className='text-blue-400'>See all Properties amenities</a>
        </div>

        <div>
          <BookingCard />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
