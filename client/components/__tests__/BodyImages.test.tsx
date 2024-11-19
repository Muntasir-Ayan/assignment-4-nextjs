import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BodyImages from '@/components/BodyImages';

const mockImages = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  'https://example.com/image4.jpg',
  'https://example.com/image5.jpg',
  'https://example.com/image6.jpg',
];

describe('BodyImages Component', () => {
  test('renders default images if no images are passed as props', () => {
    render(<BodyImages images={null} />);

    // Verify images from defaultImages are rendered
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5); // Default images are sliced to show 5
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('plus.unsplash.com'));
  });

  test('renders passed images via props', () => {
    render(<BodyImages images={mockImages} />);

    // Verify images from mockImages are rendered
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5); // Only first 5 images should display
    expect(images[0]).toHaveAttribute('src', mockImages[0]);
  });

  test('displays +N overlay for additional images', () => {
    render(<BodyImages images={mockImages} />);

    // Check for the overlay text
    const overlay = screen.getByText(`+${mockImages.length}`);
    expect(overlay).toBeInTheDocument();
  });

  test('opens image viewer when an image is clicked', () => {
    render(<BodyImages images={mockImages} />);

    // Simulate clicking on the first image
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);

    // Verify image viewer is open
    const modalImage = screen.getByRole('img', { name: /image 1/i });
    expect(modalImage).toBeInTheDocument();
    expect(modalImage).toHaveAttribute('src', mockImages[0]);
  });

  test('navigates to the next and previous images in the viewer', () => {
    render(<BodyImages images={mockImages} />);

    // Open viewer
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);

    // Navigate to the next image
    const nextButton = screen.getByText(/next/i);
    fireEvent.click(nextButton);

    const modalImage = screen.getByRole('img');
    expect(modalImage).toHaveAttribute('src', mockImages[1]);

    // Navigate back to the previous image
    const prevButton = screen.getByText(/previous/i);
    fireEvent.click(prevButton);

    expect(modalImage).toHaveAttribute('src', mockImages[0]);
  });

  test('closes the viewer when the close button is clicked', () => {
    render(<BodyImages images={mockImages} />);

    // Open viewer
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);

    // Close viewer
    const closeButton = screen.getByText(/×/i); // Close button
    fireEvent.click(closeButton);

    // Verify viewer is closed
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('disables navigation buttons appropriately', () => {
    render(<BodyImages images={mockImages} />);

    // Open viewer
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);

    const prevButton = screen.getByText(/previous/i);
    const nextButton = screen.getByText(/next/i);

    // At the first image
    expect(prevButton).toBeDisabled();
    fireEvent.click(nextButton);

    // Navigate to the last image
    for (let i = 0; i < mockImages.length - 2; i++) {
      fireEvent.click(nextButton);
    }

    // At the last image
    expect(nextButton).toBeDisabled();
  });
});
