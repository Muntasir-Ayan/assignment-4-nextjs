import { useState } from "react";
import "@/app/css/all.css";

const Sidebar: React.FC = () => {
  const [adultCount, setAdultCount] = useState<number>(0);
  const [childCount, setChildCount] = useState<number>(0);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isWithPet, setIsWithPet] = useState<boolean>(false);

  const totalTravelers = adultCount + childCount;

  const openPopup = () => setIsPopupOpen(true);

  const closePopup = () => setIsPopupOpen(false);

  const updateCount = (type: "adult" | "child", delta: number) => {
    if (type === "adult") {
      const newAdultCount = Math.max(0, adultCount + delta);
      setAdultCount(newAdultCount);

      // Reset child count if adults are 0
      if (newAdultCount === 0) {
        setChildCount(0);
      }
    } else if (type === "child" && adultCount > 0) {
      setChildCount(Math.max(0, childCount + delta));
    }
  };

  return (
    <div className="sidebar">
      {/* Booking Card */}
      <div className="booking-card two-column">
        <div className="loading-icon">
          <i className="fa-solid fa-spinner fa-3x"></i>
        </div>
        <div>
          <div>Members get our best prices when signed in!</div>
          <button className="book-button">Sign in</button>
        </div>
      </div>

      {/* Price Card */}
      <div className="price-card">
        <div className="price">
          <span>$134</span> per night
        </div>
        <div className="cancellation">
          <span>✓</span> Free cancellation
        </div>
        <div className="availability">
          <span>✓</span> Your dates are available
        </div>
        <div className="dates">
          <div className="date-input">
            <p>Start date</p>
            <div>📅 Nov 18</div>
          </div>
          <div className="date-input">
            <p>End date</p>
            <div>📅 Nov 20</div>
          </div>
        </div>

        {/* Travelers */}
        <div className="sidebar-travelers date-input" onClick={openPopup}>
          <p>Travelers</p>
          <div id="sidebar-traveler-count">
            👤 {totalTravelers} traveler{totalTravelers !== 1 ? "s" : ""}
            {isWithPet && " (with pet)"}
          </div>
        </div>

        {/* Popup */}
        {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[300px] md:w-[30%] p-6 rounded-lg shadow-lg border border-blue-500">
            <h2 className="text-lg font-semibold text-center">Travelers</h2>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-800">Adults</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateCount("adult", -1)}
                  disabled={adultCount <= 0}
                  className={`px-3 py-1 bg-gray-200 rounded ${
                    adultCount > 0 ? "hover:bg-gray-300" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  -
                </button>
                <span>{adultCount}</span>
                <button
                  onClick={() => updateCount("adult", 1)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-800">
                Children <small className="text-gray-500">(Ages 0 to 17)</small>
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateCount("child", -1)}
                  disabled={childCount <= 0}
                  className={`px-3 py-1 bg-gray-200 rounded ${
                    childCount > 0 ? "hover:bg-gray-300" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  -
                </button>
                <span>{childCount}</span>
                <button
                  onClick={() => updateCount("child", 1)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center space-x-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={isWithPet}
                  onChange={(e) => setIsWithPet(e.target.checked)}
                  className="rounded border-gray-300 focus:ring-blue-500"
                />
                <span>I am traveling with pets</span>
              </label>
            </div>

            <button
              onClick={closePopup}
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Done
            </button>
          </div>
        </div>
      )}

        <div className="total">
          <span>Total</span>
          <span>$543</span>
        </div>
        <div className="no-charge">
          <div>Total includes fees, not tax</div>
          <a href="#" className="price-details">
            Price details
          </a>
        </div>
        <button className="book-button">Book now</button>
        <p style={{ textAlign: "center" }}>You will not be charged yet</p>
      </div>
      <a href="#" className="contact-host">
        Contact host
      </a>
      <hr />
      <div className="property-id">
        <span className="pro">Property</span> <span># 9538104ha</span>
      </div>
    </div>
  );
};

export default Sidebar;
