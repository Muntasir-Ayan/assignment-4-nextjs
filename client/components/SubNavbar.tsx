"use client";

import React, { useEffect, useState } from "react";

interface SubNavProps {
  hotelData?: {
    title: string;
    description: string;
    images: string[] | null;
  };
}

const SubNavbar: React.FC<SubNavProps> = ({ hotelData }) => {
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Load saved state from localStorage when the component mounts
  useEffect(() => {
    const savedState = localStorage.getItem("isSaved");
    if (savedState === "true") {
      setIsSaved(true);
    }
  }, []);

  // Update localStorage whenever the saved state changes
  useEffect(() => {
    localStorage.setItem("isSaved", isSaved.toString());
  }, [isSaved]);

  const toggleSaveState = () => {
    setIsSaved((prevState) => !prevState);
  };

  const openPopupShare = () => {
    setIsSharePopupOpen(true);
  };

  const closePopupShare = () => {
    setIsSharePopupOpen(false);
  };

  const copyLink = async () => {
    const currentUrl = window.location.href; // Get the current page URL
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Could not copy link: ", error);
    }
  };

  // Use default values in case hotelData is not provided
  const defaultImage = hotelData?.images?.[0] || "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2";
  const title = hotelData?.title || "Hotel Title";
  const description = hotelData?.description || "Hotel Description";

  return (
    <div className="container mx-auto flex flex-col gap-4 mt-8 mb-8">
      {/* Upper Body Section */}
      <div className="flex justify-between items-center w-full mx-auto max-w-screen-lg">
        {/* Left Arrow Link */}
        <div className="text-lg font-light">
          <a href="#" className="text-blue-600 hover:underline">
            &#8592; See all properties
          </a>
        </div>

        {/* Share and Save Buttons */}
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-white border-2 border-blue-400 rounded-full text-black text-base font-light flex items-center gap-2 hover:bg-blue-100"
            onClick={openPopupShare}
          >
            <i className="fa-solid fa-arrow-up-from-bracket text-blue-400"></i>
            Share
          </button>
          <button
            className={`px-4 py-2 bg-white border-2 ${isSaved ? "border-red-500" : "border-blue-400"} rounded-full text-black text-base font-light flex items-center gap-2 hover:bg-blue-100`}
            onClick={toggleSaveState}
          >
            <i
              className={`fa-heart ${isSaved ? "fa-solid text-red-500" : "fa-regular text-blue-400"}`}
            ></i>
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
      </div>

      {/* Share Popup */}
      {isSharePopupOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={closePopupShare}
          ></div>

          {/* Popup Content */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-20 w-96">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-lg font-bold">Share</h3>
              <button
                className="text-2xl font-bold text-black"
                onClick={closePopupShare}
              >
                &times;
              </button>
            </div>

            {/* Image and Details */}
            <div className="flex gap-4 items-start mb-4">
              <img
                src={defaultImage}
                alt={title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium">{title}</h4>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <button className="text-xl text-gray-600 hover:text-blue-500">
                <i className="fa-regular fa-comments"></i>
              </button>
              <button className="text-xl text-gray-600 hover:text-green-500">
                <i className="fa-brands fa-whatsapp"></i>
              </button>
              <button className="text-xl text-gray-600 hover:text-blue-400">
                <i className="fa-brands fa-facebook-messenger"></i>
              </button>
              <button className="text-xl text-gray-600 hover:text-blue-600">
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button className="text-xl text-gray-600 hover:text-blue-600">
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button
                className="text-xl text-gray-600 hover:text-blue-500"
                onClick={copyLink}
              >
                <i className="fa-solid fa-link"></i> Copy Link
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SubNavbar;
