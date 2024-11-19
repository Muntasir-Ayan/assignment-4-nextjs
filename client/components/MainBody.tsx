'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import BookingCard from '@/components/BookingCard';

interface MainBodyProps {
  hotelData?: {
    title: string;
    description: string;
    guest_count: number;
    bedroom_count: number;
    bathroom_count: number;
    amenities: string[];
    address: string;
    latitude?: number;
    longitude?: number;
  };
}

const MainBody: React.FC<MainBodyProps> = ({ hotelData }) => {
  const defaultLocation = {
    latitude: 23.8103,
    longitude: 90.4125,
    address: 'Dhaka, Bangladesh',
  };

  const location = {
    latitude: hotelData?.latitude || defaultLocation.latitude,
    longitude: hotelData?.longitude || defaultLocation.longitude,
    address: hotelData?.address || defaultLocation.address,
  };

  const mapImage = '/map.jpeg'; // Replace with your map image placeholder

  const handleOpenMap = () => {
    const mapUrl = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold">
            {hotelData?.title || 'Juneau Vacation Home: Stunning View + Beach Access'}
          </h1>
          <p className="text-gray-600 mt-2">
            {hotelData?.description || 'A beautiful vacation home with stunning views and beach access.'}
          </p>

          {/* Guest and Property Info */}
          <div className="grid grid-cols-2 mt-4">
            <div>
              <p>Bedrooms: {hotelData?.bedroom_count || 2}</p>
              <p>Sleeps: {hotelData?.guest_count || 4}</p>
            </div>
            <div>
              <p>Bathrooms: {hotelData?.bathroom_count || 1}</p>
              
            </div>
          </div>

          {/* Amenities */}
          <h3 className="mt-4  font-semibold">Popular amenities</h3>
          <ul className="grid grid-cols-2 list-disc ml-5 mt-2">
            {(hotelData?.amenities || ['Barbecue grill', 'Outdoor Space', 'Kitchen', 'Washer', 'Parking', 'Dryer']).map(
              (amenity, index) => (
                <li key={index}>{amenity}</li>
              )
            )}
          </ul>

          {/* Map Section */}
      <div className="mt-8">
        <h3 className="font-semibold mb-4">Explore the area</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Map Preview */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={mapImage} alt="Area map" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-medium mb-2">{location.address}</h4>
              <a
                href="#"
                onClick={handleOpenMap}
                className="text-blue-600 hover:underline"
              >
                View in map
              </a>
            </div>
          </div>

          {/* Nearby Places */}
          <div>
            <ul className="list-disc ml-5">
              {/* Add dynamic data for nearby places if available */}
              <li>Auke Bay - 6 min drive</li>
              <li>University of Alaska-Southeast - 10 min drive</li>
              <li>Mendenhall Golf Course - 14 min drive</li>
              <li>Juneau, AK (JNU-Juneau Intl.) - 14 min drive</li>
            </ul>
          </div>
        </div>
      </div>
        </div>

        {/* Right Section */}
        <div>
          <BookingCard />
        </div>
      </div>

      
    </div>
  );
};

export default MainBody;
