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

import Image from "next/image";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <SubNavbar />
      <BodyImages/>
      <BodyNavigation />
      <MainBody />
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
      <div>Hello</div>
    </main>
    
  );
}
