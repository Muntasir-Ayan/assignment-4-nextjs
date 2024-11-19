import { render, screen, fireEvent } from '@testing-library/react';
import BodyImages from '@/components/BodyImages';

describe('BodyImages Component', () => {
  const mockImages = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  it('renders default images when no images are passed via props', () => {
    render(<BodyImages images={null} />);
    const defaultImages = screen.getAllByRole('img');
    expect(defaultImages.length).toBeGreaterThan(0);
    expect(defaultImages[0]).toHaveAttribute('src', 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2');
  });

  it('renders new images when passed via props', () => {
    render(<BodyImages images={mockImages} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(mockImages.length);
    expect(images[0]).toHaveAttribute('src', mockImages[0]);
  });

  it('renders a "more images" overlay if there are more than 5 images', () => {
    const manyImages = Array.from({ length: 6 }, (_, i) => `https://example.com/image${i + 1}.jpg`);
    render(<BodyImages images={manyImages} />);
    expect(screen.getByText('+6')).toBeInTheDocument();
  });

  it('opens the image viewer when an image is clicked', () => {
    render(<BodyImages images={mockImages} />);
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);
    expect(screen.getByText(/Image 1/i)).toBeInTheDocument(); // Verifying viewer is open
  });

  it('displays the correct image in the viewer and allows navigation', () => {
    render(<BodyImages images={mockImages} />);
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();

    const prevButton = screen.getByText('Previous');
    fireEvent.click(prevButton);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });

  it('closes the viewer when the close button is clicked', () => {
    render(<BodyImages images={mockImages} />);
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);

    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    expect(screen.queryByText(/Image 1/i)).not.toBeInTheDocument(); // Viewer is closed
  });

  it('disables "Previous" button when on the first image', () => {
    render(<BodyImages images={mockImages} />);
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);

    const prevButton = screen.getByText('Previous');
    expect(prevButton).toBeDisabled();
  });

  it('disables "Next" button when on the last image', () => {
    render(<BodyImages images={mockImages} />);
    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.click(firstImage);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    expect(nextButton).toBeDisabled();
  });
});
