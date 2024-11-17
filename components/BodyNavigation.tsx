'use client';

import { useState } from "react";

type Tab = {
  name: string;
  href: string;
};

const tabs: Tab[] = [
  { name: "Overview", href: "#" },
  { name: "Amenities", href: "#" },
  { name: "Policies", href: "#" },
];

export default function BodyNavigation() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="border-b border-gray-300">
      <nav className="flex">
        <ul className="flex space-x-8">
          {tabs.map((tab) => (
            <li key={tab.name} className="relative">
              <a
                href={tab.href}
                onClick={() => setActiveTab(tab.name)}
                className={`inline-block py-4 text-sm transition-colors ${
                  activeTab === tab.name
                    ? "text-blue-600 font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
