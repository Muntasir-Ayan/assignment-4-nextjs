import React from 'react';

interface HostInformation {
  name: string;
  contact: string;
  email: string;
}

interface FooterProps {
  hostInformation?: HostInformation; // Make this optional with fallback logic
}

const Footer: React.FC<FooterProps> = ({ hostInformation }) => {
  // Check if hostInformation is provided and set default values if not
  const hostName = hostInformation?.name || "Evolve";
  const hostEmail = hostInformation?.email || "#";
  const hostContact = hostInformation?.contact || "#";

  return (
    <footer className="container mx-auto footer-container mt-10 border-t pt-6 mb-10">
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
          <h2 className="text-2xl font-semibold">About the host</h2>
          </div>
          <div>
          <p>Hosted by {hostName}</p>
          <p>Email: {hostEmail}</p>
          <p>Contact: {hostContact}</p>
          <p className="mt-2 text-sm text-gray-600">Languages: English, French, German, Spanish</p>
          </div>
          
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-6">
          <div>
          <h2 className="text-xl font-semibold">Send a message</h2>
          </div>
         <div>
         <a href={`mailto:${hostEmail}`} className="contact-button inline-block px-4 py-2 mt-2 border border-blue-500 rounded-full text-blue-500">
            Contact host
          </a>
         </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
