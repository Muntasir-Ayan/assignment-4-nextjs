import React from "react";
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
import NotFound from "@/app/NotFound";

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
  params: { slug: string; id: string };
}

const HotelDetails: React.FC<HotelDetailsProps> = async ({ params }) => {
  const { slug, id } = params;

  let hotelData: HotelData | null = null;

  try {
    const response = await fetch(`http://localhost:3002/hotel/${id}`);
    if (response.ok) {
      const data = await response.json();

      // Validate if the slug matches
      if (data.slug !== slug) {
        return <div>Hotel not found</div>;
      }

      hotelData = data;
    }
  } catch (error) {
    console.error("Error fetching hotel data:", error);
  }

  // If no hotel data is found
  if (!hotelData) {
    return <div><NotFound /></div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <SubNavbar hotelData={hotelData}/>
      <BodyImages images={hotelData.images || []} />
      <BodyNavigation />
      <MainBody hotelData={hotelData} />
      <RoomAndBed />
      <AmenitiesAndPolicies />
      <QuestionSection />
      <HouseRules />
      <Cancellation />
      <FAQ />
      <Reviews />
      {/* Pass host information to Footer */}
      <Footer hostInformation={hotelData.host_information} />
    </div>
  );
};

export default HotelDetails;
