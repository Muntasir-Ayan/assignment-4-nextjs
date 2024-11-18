// app/hotel/[id]/page.tsx
import React from 'react';
import AmenitiesAndPolicies from "@/components/AmenitiesAndPolicies";
import BodyImages from "@/components/BodyImages";
import BodyNavigation from "@/components/BodyNavigation";
import Cancellation from "@/components/Cancellation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HouseRules from "@/components/HouseRules";
import MainBody from "@/components/MainBody";
import Navbar from "@/components/Navbar";
import QuestionSection from "@/components/QuestionSection";
import Reviews from "@/components/Reviews";
import RoomAndBed from "@/components/RoomAndBed";
import SubNavbar from "@/components/SubNavbar";

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
       {/* Image Gallery */}
       <Navbar />
       <SubNavbar />
       <BodyImages images={hotelData.images || null} /> {/* Pass fetched images */}
       <BodyNavigation />
      {/* Pass hotelData to MainBody */}
      <MainBody hotelData={hotelData} />
      <RoomAndBed />
      <AmenitiesAndPolicies />
      <QuestionSection />
      <HouseRules />
      {/* <DamageSection /> */}
      <Cancellation />
      {/* <ImportantInfo /> */}
      <FAQ />
      <Reviews />
      <Footer />

     

      {/* Amenities */}
      {/* <h3 className="text-xl font-bold mt-4">Amenities</h3>
      <ul className="list-disc ml-6">
        {hotelData.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default HotelDetails;
