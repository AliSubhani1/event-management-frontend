import React, { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  { question: "Why Event booking?", answer: "Event booking offers the best deals and seamless ticket booking experience." },
  { question: "How frequently are new events published on this website?", answer: "New events are updated on daily basis." },
  { question: "Which regions do you cover?", answer: "We cover all events in Europe region." },
  { question: "How much time does your support team takes to respond?", answer: "Our support team normally responds within an hour. All tickets are resolved in 24 hours." },
  { question: "If I have a query regarding my E-Ticket, who can I contact for assistance?", answer: "You can contact our support team via email or submit your query on contact us page." },
  { question: "What if I want to cancel my reservation?", answer: "You will have to contact our support team atleast 1 day before event to cancel your booking." },
  { question: "What are the requirements for booking?", answer: "A valid email address and contact information is mandatory for booking." },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-100 rounded-md mb-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium hover:bg-gray-200 transition"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#1476d1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 text-gray-600 bg-gray-50">{faq.answer}</div>
            </div>
            <div
              className="h-[1px] bg-gray-0 bg-opacity-40 transition-all duration-300"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
