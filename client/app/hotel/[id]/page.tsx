// app/hotel/[id]/page.tsx

import React from 'react';

// Type Definitions
interface HotelData {
  title: string;
  description: string;
  images: string[];
  guest_count: number;
  bedroom_count: number;
  bathroom_count: number;
  amenities: string[];
  host_information: {
    name: string;
    contact: string;
    email: string;
  };
  address: string;
  latitude: number;
  longitude: number;
}

interface HotelDetailsProps {
  hotelData: HotelData | null;
}

// Page Component with async data fetching
const HotelDetails: React.FC<HotelDetailsProps> = async ({ params }) => {
  const { id } = params;

  // Fetch hotel data on the server side
  let hotelData: HotelData | null = null;
  
  try {
    const response = await fetch(`http://localhost:3002/hotel/${id}`);
    if (response.ok) {
      hotelData = await response.json();
    }
  } catch (error) {
    console.error('Error fetching hotel data:', error);
  }

  if (!hotelData) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{hotelData.title}</h1>
      <p className="text-gray-600">{hotelData.description}</p>

      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-4 my-4">
        {hotelData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-64 object-cover rounded-md"
          />
        ))}
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <p>
            <strong>Guests:</strong> {hotelData.guest_count}
          </p>
          <p>
            <strong>Bedrooms:</strong> {hotelData.bedroom_count}
          </p>
          <p>
            <strong>Bathrooms:</strong> {hotelData.bathroom_count}
          </p>
        </div>
        <div>
          <p>
            <strong>Address:</strong> {hotelData.address}
          </p>
          <p>
            <strong>Host:</strong> {hotelData.host_information.name}
          </p>
          <p>
            <strong>Contact:</strong> {hotelData.host_information.contact}
          </p>
        </div>
      </div>

      {/* Amenities */}
      <h3 className="text-xl font-bold mt-4">Amenities</h3>
      <ul className="list-disc ml-6">
        {hotelData.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
};

// This function will run on the server side to fetch data
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  let title = 'Hotel Details';

  try {
    const res = await fetch(`http://localhost:3002/hotel/${id}`);
    if (res.ok) {
      const data = await res.json();
      title = data.title || title;
    }
  } catch (error) {
    console.error('Error fetching metadata:', error);
  }

  return {
    title,
  };
}

export default HotelDetails;
