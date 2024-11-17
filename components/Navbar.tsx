'use client';

import { useState } from "react";

const Navbar: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [region, setRegion] = useState("United States");
  const [currency, setCurrency] = useState("USD");

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value;
    setRegion(selectedRegion);

    switch (selectedRegion) {
      case "Portugal":
        setCurrency("EUR");
        break;
      case "United States":
        setCurrency("USD");
        break;
      case "Japan":
        setCurrency("JPY");
        break;
      default:
        setCurrency("");
    }
  };

  const handleSave = () => {
    setIsPopupOpen(false);
    alert(`Settings saved! Region: ${region}, Currency: ${currency}`);
  };

  return (
    <header className="flex justify-end bg-white p-4 shadow-lg border-b border-gray-300 ">
      {/* Mobile Menu Toggle */}
      <div
        className="menu-toggle md:hidden flex justify-between items-center cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="fas fa-bars text-2xl text-gray-700"></i>
        {/* <span className="text-gray-700 font-medium">Menu</span> */}
      </div>

      {/* Navigation */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:space-x-6 mt-4 md:mt-0`}
      >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mr-8">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500"
            onClick={(e) => {
              e.preventDefault(); // Prevent page reload
              setIsPopupOpen(true); // Open the popup
            }}
          >
            🌐 {region}
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Trip boards
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            List your property
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Help
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            My trip
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Sign in
          </a>
        </div>
      </nav>

      {/* Popup */}
      {isPopupOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsPopupOpen(false)}
          ></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-20 w-80">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">Display settings</h2>
              <button
                className="text-xl font-bold cursor-pointer text-black"
                onClick={() => setIsPopupOpen(false)}
              >
                &times;
              </button>
            </div>
            <p className="text-sm text-red-600 mb-2">
              ⚠ Changing your region could change your rewards program.
            </p>
            <p className="text-sm mb-4 text-black">
              To stay with your current rewards program, keep your region the
              same. One Key is currently only available in select regions.
            </p>
            <div className="mb-4 text-black">
              <label htmlFor="region" className="block mb-2">
                Region:
              </label>
              <select
                id="region"
                className="w-full border rounded p-2"
                value={region}
                onChange={handleRegionChange}
              >
                <option value="Portugal">Portugal</option>
                <option value="United States">United States</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
            <p className="mb-4 text-sm text-black">
              Selected Currency: <strong>{currency}</strong>
            </p>
            <button
              className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-700"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
