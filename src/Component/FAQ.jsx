import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      header: "How long will it take to deliver my first blog post?",
      text: "It takes approximately 2-3 weeks to deliver your first blog post. This includes comprehensive research and the creation of a monthly content marketing strategy.",
    },
    {
      header: "Do you offer custom packages for blogging?",
      text: "Yes, we provide custom packages tailored to your specific needs, ensuring you get maximum value from our services.",
    },
    {
      header: "What is your refund policy?",
      text: "If you're not satisfied with our services, you can request a refund within 14 days of delivery. Conditions apply.",
    },
    {
      header: "Can I make revisions to my blog post?",
      text: "Absolutely! We offer up to two free revisions per blog post to ensure the content aligns with your expectations.",
    },
    {
      header: "Do you handle SEO optimization for blog posts?",
      text: "Yes, we provide complete SEO optimization for all our blog posts, including keyword research and meta description writing.",
    },
    {
      header: "Is there a minimum contract period?",
      text: "No, there’s no minimum contract period. You can choose our services on a month-to-month basis.",
    },
  ];

  return (
    <section className="relative z-20 bg-gray-50 pb-16 pt-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mx-auto mb-16 max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Have a question? Find answers to common queries below. If you still
            have questions, don’t hesitate to reach out.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="grid gap-8 sm:grid-cols-2">
          {faqData.map((item, index) => (
            <AccordionItem key={index} header={item.header} text={item.text} />
          ))}
        </div>
      </div>

      {/* Decorative SVG */}
      <BackgroundSVG />
    </section>
  );
};

export default FAQ;

const AccordionItem = ({ header, text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <button
        className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <h4 className="text-lg font-medium text-gray-800">{header}</h4>
        <span
          className={`ml-4 transform transition-transform ${
            isActive ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 9L12 16L5 9"
              stroke="#4F46E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {isActive && (
        <div className="px-5 pb-5 text-gray-600">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

const BackgroundSVG = () => (
  <div className="absolute inset-x-0 bottom-0 z-[-1]">
    <svg
      className="w-full"
      height="200"
      viewBox="0 0 1440 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 120L48 140C96 160 192 200 288 186.7C384 173 480 107 576 96C672 85 768 139 864 170.7C960 203 1056 213 1152 181.3C1248 149 1344 75 1392 37.3L1440 0V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V120Z"
        fill="#4F46E5"
      />
    </svg>
  </div>
);
