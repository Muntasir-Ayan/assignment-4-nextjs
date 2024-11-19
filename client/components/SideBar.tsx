import React, { useState } from 'react';

interface Traveler {
  adults: number;
  children: number;
  pets: boolean;
}

const BookingCard: React.FC = () => {
  const [travelers, setTravelers] = useState<Traveler>({
    adults: 0,
    children: 0,
    pets: false,
  });

  const [startDate, setStartDate] = useState('Nov 18');
  const [endDate, setEndDate] = useState('Nov 20');

  const openPopup = () => {
    const popup = document.getElementById('sidebar-popup');
    if (popup) {
      popup.style.display = 'block';
    }
  };

  const closePopup = () => {
    const popup = document.getElementById('sidebar-popup');
    if (popup) {
      popup.style.display = 'none';
    }
  };

  const updateCount = (type: 'adult' | 'child', delta: number) => {
    setTravelers((prev) => {
      if (type === 'adult') {
        return { ...prev, adults: prev.adults + delta };
      } else {
        return { ...prev, children: prev.children + delta };
      }
    });
  };

  const togglePets = () => {
    setTravelers((prev) => ({ ...prev, pets: !prev.pets }));
  };

  return (
    <div className="sidebar">
      <div className="booking-card two-column">
        <div className="loading-icon">
          <i className="fa-solid fa-spinner fa-3x"></i>
        </div>
        <div>
          <div>Members get our best prices when signed in!</div>
          <button className="book-button">Sign in</button>
        </div>
      </div>

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
            <div>📅 {startDate}</div>
          </div>
          <div className="date-input">
            <p>End date</p>
            <div>📅 {endDate}</div>
          </div>
        </div>
        <div className="sidebar-travelers date-input" onClick={openPopup}>
          <p>Travelers</p>
          <div id="sidebar-traveler-count">👤 {travelers.adults + travelers.children} travelers</div>
        </div>
        <div className="total">
          <span>Total</span>
          <span>$543</span>
        </div>
        <div className="no-charge">
          <div style={{ display: 'inline' }}>Total includes fees, not tax</div>
          <div>
            <a href="#" className="price-details">
              Price details
            </a>
          </div>
        </div>
        <button className="book-button">Book now</button>
        <p style={{ textAlign: 'center' }}>You will not charged yet</p>
      </div>
      <a href="#" className="contact-host">
        Contact host
      </a>
      <hr />
      <div className="property-id">
        <span className="pro">Property</span> <span># 9538104ha</span>
      </div>

      <div className="sidebar-popup" id="sidebar-popup">
        <h2>Travelers</h2>
        <div className="sidebar-section">
          <p>Adults</p>
          <div>
            <button id="sidebar-adult-decrement" onClick={() => updateCount('adult', -1)}>
              -
            </button>
            <span id="sidebar-adult-count">{travelers.adults}</span>
            <button onClick={() => updateCount('adult', 1)}>+</button>
          </div>
        </div>
        <div className="sidebar-section">
          <p>Children <small>(Ages 0 to 17)</small></p>
          <div>
            <button id="sidebar-child-decrement" onClick={() => updateCount('child', -1)}>
              -
            </button>
            <span id="sidebar-child-count">{travelers.children}</span>
            <button onClick={() => updateCount('child', 1)}>+</button>
          </div>
        </div>
        <div className="sidebar-section">
          <label className="text-color-popUp">
            <input type="checkbox" id="sidebar-pets" checked={travelers.pets} onChange={togglePets} /> I am traveling with pets
          </label>
        </div>
        <button onClick={closePopup} className="Done-button">
          Done
        </button>
      </div>
    </div>
  );
};

export default BookingCard;