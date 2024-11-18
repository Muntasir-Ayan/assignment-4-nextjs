'use client'
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

import React, {useEffect, useState} from "react";

import Image from "next/image";


export default function Home() {


  const [message, setMessage] = useState("loading")
  useEffect(() =>{
    fetch("http://localhost:3001/message/hello").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.message)
      }
    )
  }, [])

  return (
    <main className="overflow-hidden">
      <div>{message}</div>
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
      
    </main>
    
  );
}
