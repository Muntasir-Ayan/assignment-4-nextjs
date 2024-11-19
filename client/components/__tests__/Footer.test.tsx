import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  test('renders default host information when no props are passed', () => {
    render(<Footer />);

    // Check for default host name
    expect(screen.getByText(/hosted by evolve/i)).toBeInTheDocument();

    // Default email and contact
    expect(screen.getByText(/email: #/i)).toBeInTheDocument();
    expect(screen.getByText(/contact: #/i)).toBeInTheDocument();

    // Check for languages section
    expect(screen.getByText(/languages: english, french, german, spanish/i)).toBeInTheDocument();
  });

  test('renders provided host information', () => {
    const mockHostInfo = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      contact: '123-456-7890',
    };

    render(<Footer hostInformation={mockHostInfo} />);

    // Check for host name
    expect(screen.getByText(/hosted by john doe/i)).toBeInTheDocument();

    // Check for email and contact
    expect(screen.getByText(/email: john.doe@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/contact: 123-456-7890/i)).toBeInTheDocument();

    // Ensure languages section is still rendered
    expect(screen.getByText(/languages: english, french, german, spanish/i)).toBeInTheDocument();
  });

  test('renders contact button with correct href', () => {
    const mockHostInfo = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      contact: '987-654-3210',
    };

    render(<Footer hostInformation={mockHostInfo} />);

    const contactButton = screen.getByRole('link', { name: /contact host/i });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveAttribute('href', 'mailto:jane.doe@example.com');
  });

  test('contact button defaults to "#" when no email is provided', () => {
    render(<Footer />);

    const contactButton = screen.getByRole('link', { name: /contact host/i });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveAttribute('href', '#');
  });

  test('renders about the host section correctly', () => {
    render(<Footer />);

    // Check section heading
    expect(screen.getByText(/about the host/i)).toBeInTheDocument();

    // Check content
    expect(screen.getByText(/hosted by evolve/i)).toBeInTheDocument();
  });

  test('renders send a message section correctly', () => {
    render(<Footer />);

    // Check section heading
    expect(screen.getByText(/send a message/i)).toBeInTheDocument();

    // Check the contact button exists
    expect(screen.getByRole('link', { name: /contact host/i })).toBeInTheDocument();
  });
});
