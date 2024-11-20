import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">Oops! The hotel you’re looking for could not be found.</p>
      <a href="/" className="text-blue-500 underline">
        Go back to the homepage
      </a>
    </div>
  );
};

export default NotFound;
