import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubNavbar from '@/components/SubNavbar';

const mockHotelData = {
  title: 'Grand Hotel',
  description: 'Luxurious hotel with modern amenities.',
  images: ['https://example.com/image1.jpg'],
};

describe('SubNavbar Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test('renders default hotel data when no props are provided', () => {
    render(<SubNavbar />);

    expect(screen.getByText(/hotel title/i)).toBeInTheDocument();
    expect(screen.getByText(/hotel description/i)).toBeInTheDocument();
  });

  test('renders hotel data passed via props', () => {
    render(<SubNavbar hotelData={mockHotelData} />);

    expect(screen.getByText(/grand hotel/i)).toBeInTheDocument();
    expect(screen.getByText(/luxurious hotel with modern amenities/i)).toBeInTheDocument();

    const image = screen.getByAltText(/grand hotel/i);
    expect(image).toHaveAttribute('src', mockHotelData.images[0]);
  });

  test('opens and closes the share popup', () => {
    render(<SubNavbar hotelData={mockHotelData} />);

    const shareButton = screen.getByText(/share/i);
    fireEvent.click(shareButton);

    // Check if the popup appears
    expect(screen.getByText(/share/i)).toBeInTheDocument();
    expect(screen.getByAltText(/grand hotel/i)).toBeInTheDocument();

    // Close the popup
    const closeButton = screen.getByText(/×/i);
    fireEvent.click(closeButton);

    // Verify popup is closed
    expect(screen.queryByText(/share/i)).not.toBeInTheDocument();
  });

  test('toggles save state and persists it in localStorage', () => {
    render(<SubNavbar hotelData={mockHotelData} />);

    const saveButton = screen.getByText(/save/i);
    expect(saveButton).toBeInTheDocument();

    // Click to save
    fireEvent.click(saveButton);
    expect(screen.getByText(/saved/i)).toBeInTheDocument();
    expect(localStorage.getItem('isSaved')).toBe('true');

    // Click to unsave
    fireEvent.click(saveButton);
    expect(screen.getByText(/save/i)).toBeInTheDocument();
    expect(localStorage.getItem('isSaved')).toBe('false');
  });

  test('loads saved state from localStorage on component mount', () => {
    // Simulate previously saved state in localStorage
    localStorage.setItem('isSaved', 'true');

    render(<SubNavbar hotelData={mockHotelData} />);

    // Verify saved state is loaded
    expect(screen.getByText(/saved/i)).toBeInTheDocument();
  });

  test('copies link to clipboard when copy button is clicked', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValueOnce(undefined),
      },
    });

    render(<SubNavbar hotelData={mockHotelData} />);

    // Open the share popup
    const shareButton = screen.getByText(/share/i);
    fireEvent.click(shareButton);

    // Click copy link button
    const copyButton = screen.getByText(/copy link/i);
    fireEvent.click(copyButton);

    // Verify clipboard.writeText is called
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(window.location.href);
  });

  test('renders "See all properties" link correctly', () => {
    render(<SubNavbar />);

    const link = screen.getByText(/see all properties/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });

  test('renders social media icons in the share popup', () => {
    render(<SubNavbar hotelData={mockHotelData} />);

    const shareButton = screen.getByText(/share/i);
    fireEvent.click(shareButton);

    // Verify social media icons exist
    expect(screen.getByText(/copy link/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /whatsapp/i })).toBeInTheDocument();
  });
});
