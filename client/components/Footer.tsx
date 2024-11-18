import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto footer-container mt-10 border-t pt-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold">About the host</h2>
          <p>Hosted by Evolve</p>
          <p className="mt-2 text-sm text-gray-600">Languages: English, French, German, Spanish</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Send a message</h2>
          <a href="#" className="contact-button inline-block px-4 py-2 mt-2 border border-blue-500 rounded-full text-blue-500">
            Contact host
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
