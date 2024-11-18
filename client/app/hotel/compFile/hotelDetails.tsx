'use client';

import React, { useState } from 'react';

// Type Definitions
interface HotelData {
  title: string;
  rating: number;
  ratingText: string;
  reviewsCount: number;
  bedrooms: number;
  sleeps: number;
  bathrooms: number;
  size: string;
  amenities: string[];
  nearbyPlaces: string[];
  location: string;
  pricePerNight: number;
}

// Components
const PropertyDetails: React.FC<{ data: HotelData }> = ({ data }) => (
  <div>
    <h1 className="text-2xl font-bold">{data.title}</h1>
    <div className="flex items-center mt-2">
      <span className="bg-green-600 text-white px-2 rounded">{data.rating}</span>
      <span className="ml-2">{data.ratingText}</span>
    </div>
    <a href="#" className="text-blue-400">
      See all {data.reviewsCount} reviews
    </a>
    <div className="grid grid-cols-2 mt-4">
      <div>
        <p>{data.bedrooms} bedrooms</p>
        <p>Sleeps {data.sleeps}</p>
      </div>
      <div>
        <p>{data.bathrooms} bathroom</p>
        <p>{data.size}</p>
      </div>
    </div>
  </div>
);

const AmenitiesList: React.FC<{ amenities: string[] }> = ({ amenities }) => (
  <div>
    <h3 className="mt-4">Popular amenities</h3>
    <ul className="grid grid-cols-2 list-disc ml-5">
      {amenities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <a href="#" className="text-blue-400">
      See all Property amenities
    </a>
  </div>
);

const BookingCard: React.FC<{ price: number }> = ({ price }) => (
  <div className="bg-blue-800 text-white p-4 rounded mt-6">
    <h2 className="text-lg">Price: ${price} per night</h2>
    <button className="mt-2 bg-blue-500 p-2 rounded">Book now</button>
  </div>
);

const MainBody: React.FC<{ hotelData: HotelData }> = ({ hotelData }) => (
  <div className="container mx-auto p-4">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <PropertyDetails data={hotelData} />
        <AmenitiesList amenities={hotelData.amenities} />
      </div>
      <div>
        <BookingCard price={hotelData.pricePerNight} />
      </div>
    </div>
  </div>
);

export default MainBody;
