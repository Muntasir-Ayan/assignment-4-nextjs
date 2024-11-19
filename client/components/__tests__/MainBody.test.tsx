import { render, screen, fireEvent } from '@testing-library/react';
import MainBody from '../MainBody'; // Adjust the path as needed
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('MainBody Component', () => {
  // Test case 1: Render component with default values (no props passed)
  it('should render with default values when no props are passed', () => {
    render(<MainBody />);

    // Check default values for title and description
    expect(screen.getByText('Juneau Vacation Home: Stunning View + Beach Access')).toBeInTheDocument();
    expect(screen.getByText('A beautiful vacation home with stunning views and beach access.')).toBeInTheDocument();

    // Check default guest count and amenities
    expect(screen.getByText('Sleeps 4')).toBeInTheDocument();
    expect(screen.getByText('Barbecue grill')).toBeInTheDocument();
  });

  // Test case 2: Update adult and child count when "+" and "-" buttons are clicked
  it('should update adult and child count correctly', () => {
    render(<MainBody />);

    // Initially both adultCount and childCount should be 0
    expect(screen.getByText('0')).toBeInTheDocument(); // Adult count
    expect(screen.queryByText('0')).toBeInTheDocument(); // Child count

    // Increase adult count
    const adultPlusButton = screen.getByText('+');
    userEvent.click(adultPlusButton);
    expect(screen.getByText('1')).toBeInTheDocument();

    // Increase child count (only when adult count > 0)
    const childPlusButton = screen.getByText('+', { selector: 'button' });
    userEvent.click(childPlusButton);
    expect(screen.getByText('1')).toBeInTheDocument();

    // Decrease adult count
    const adultMinusButton = screen.getByText('-', { selector: 'button' });
    userEvent.click(adultMinusButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  // Test case 3: Open and close the traveler count popup
  it('should open and close the traveler count popup', () => {
    render(<MainBody />);

    // Click on the "Book now" button to show the popup
    const bookNowButton = screen.getByText('Book now');
    userEvent.click(bookNowButton);

    // Check if popup is shown
    expect(screen.getByText('Travelers')).toBeInTheDocument();

    // Close the popup by clicking "Done"
    const doneButton = screen.getByText('Done');
    userEvent.click(doneButton);

    // Verify that the popup is closed
    expect(screen.queryByText('Travelers')).not.toBeInTheDocument();
  });

  // Test case 4: Ensure that the "View in a map" link is present
  it('should have a "View in a map" link', () => {
    render(<MainBody />);
    
    // Check if the "View in a map" link is present and visible
    const mapLink = screen.getByText('View in a map');
    expect(mapLink).toBeInTheDocument();
  });
});
