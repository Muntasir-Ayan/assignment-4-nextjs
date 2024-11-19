import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoomAndBed from '@/components/RoomAndBed';

const mockHotelData = {
  bedrooms: [
    { name: 'Master Bedroom', bedType: '1 King Bed' },
    { name: 'Guest Bedroom', bedType: '2 Twin Beds' },
  ],
  sleeps: 6,
  spaces: ['Living Room', 'Kitchen', 'Terrace', 'Private Pool'],
  propertyDescription: 'Experience a luxurious stay with breathtaking views.',
  propertyTitle: 'Luxury Villa with Ocean View',
  locationHighlights: {
    outdoors: 'Private Beach (on-site), Coral Reef Diving (1 mile)',
    thingsToDo: 'Local Market (2 miles), Adventure Park (5 miles)',
  },
};

describe('RoomAndBed Component', () => {
  test('renders default data when no props are provided', () => {
    render(<RoomAndBed />);

    // Verify default bedrooms
    expect(screen.getByText(/bedroom 1/i)).toBeInTheDocument();
    expect(screen.getByText(/1 queen bed/i)).toBeInTheDocument();
    expect(screen.getByText(/bedroom 2/i)).toBeInTheDocument();
    expect(screen.getByText(/1 twin bed/i)).toBeInTheDocument();

    // Verify default sleeps
    expect(screen.getByText(/sleeps 4/i)).toBeInTheDocument();

    // Verify default spaces
    expect(screen.getByText(/deck or patio/i)).toBeInTheDocument();
    expect(screen.getByText(/kitchen/i)).toBeInTheDocument();

    // Verify default property title and description
    expect(screen.getByText(/juneau vacation home/i)).toBeInTheDocument();
    expect(
      screen.getByText(/escape to the mountains and experience the great outdoors/i)
    ).toBeInTheDocument();

    // Verify default location highlights
    expect(screen.getByText(/lena cove/i)).toBeInTheDocument();
    expect(screen.getByText(/mendenhall golf/i)).toBeInTheDocument();
  });

  test('renders provided hotel data correctly', () => {
    render(<RoomAndBed hotelData={mockHotelData} />);

    // Verify bedrooms
    expect(screen.getByText(/master bedroom/i)).toBeInTheDocument();
    expect(screen.getByText(/1 king bed/i)).toBeInTheDocument();
    expect(screen.getByText(/guest bedroom/i)).toBeInTheDocument();
    expect(screen.getByText(/2 twin beds/i)).toBeInTheDocument();

    // Verify sleeps
    expect(screen.getByText(/sleeps 6/i)).toBeInTheDocument();

    // Verify spaces
    expect(screen.getByText(/living room/i)).toBeInTheDocument();
    expect(screen.getByText(/kitchen/i)).toBeInTheDocument();
    expect(screen.getByText(/terrace/i)).toBeInTheDocument();
    expect(screen.getByText(/private pool/i)).toBeInTheDocument();

    // Verify property title and description
    expect(screen.getByText(/luxury villa with ocean view/i)).toBeInTheDocument();
    expect(
      screen.getByText(/experience a luxurious stay with breathtaking views/i)
    ).toBeInTheDocument();

    // Verify location highlights
    expect(screen.getByText(/private beach/i)).toBeInTheDocument();
    expect(screen.getByText(/local market/i)).toBeInTheDocument();
  });

  test('renders "See all rooms and beds details" link', () => {
    render(<RoomAndBed />);
    const link = screen.getByText(/see all rooms and beds details/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });

  test('renders correct number of bedrooms', () => {
    render(<RoomAndBed hotelData={mockHotelData} />);
    const bedroomElements = screen.getAllByText(/bedroom/i);
    expect(bedroomElements.length).toBe(mockHotelData.bedrooms.length);
  });

  test('renders correct number of spaces', () => {
    render(<RoomAndBed hotelData={mockHotelData} />);
    const spaceElements = screen.getAllByText(/🏠/);
    expect(spaceElements.length).toBe(mockHotelData.spaces.length);
  });

  test('renders section headings', () => {
    render(<RoomAndBed />);

    // Verify section headings
    expect(screen.getByText(/rooms & beds/i)).toBeInTheDocument();
    expect(screen.getByText(/spaces/i)).toBeInTheDocument();
    expect(screen.getByText(/about this property/i)).toBeInTheDocument();
    expect(screen.getByText(/location/i)).toBeInTheDocument();
  });

  test('renders location details correctly', () => {
    render(<RoomAndBed hotelData={mockHotelData} />);

    // Verify location details
    expect(screen.getByText(/great outdoors/i)).toBeInTheDocument();
    expect(screen.getByText(/private beach/i)).toBeInTheDocument();
    expect(screen.getByText(/things to do/i)).toBeInTheDocument();
    expect(screen.getByText(/local market/i)).toBeInTheDocument();
  });
});
