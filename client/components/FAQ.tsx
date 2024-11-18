import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { question: "Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?", icon: "↓" },
    { question: "What time is check-in at Juneau Vacation Home?", icon: "↓" },
    { question: "What time is check-out at Juneau Vacation Home?", icon: "↓" },
    { question: "Where is Juneau Vacation Home located?", icon: "↓" },
  ];

  return (
    <div className="container mx-auto faq-section mt-10">
      <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item border-b py-4 cursor-pointer">
          <div className="flex justify-between items-center">
            <span>{faq.question}</span>
            <span className="text-lg">{faq.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
