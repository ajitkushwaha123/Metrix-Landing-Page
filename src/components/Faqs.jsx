import React, { useState } from "react";
import Title from "./Title";

const Faqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section id="faqs" className="py-10 bg-pattern1 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <Title preTitle={"Frequently"} title={"Asked Question"}/>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {[
            {
              id: "question1",
              question:
                "What is the pricing plan for your restaurant billing software?",
              answer:
                "Our pricing plan is designed to fit your business needs, with flexible options to suit your budget. for more info simply check our picing plans or contact support !.",
            },
            {
              id: "question2",
              question: "How do I choose the right plan for my restaurant?",
              answer:
                "Contact our support to discuss your specific needs, and we'll help you select the perfect plan.",
            },
            {
              id: "question3",
              question: "Can I upgrade or downgrade my plan later?",
              answer:
                "Yes, you can adjust your plan as your business grows or changes.",
            },

            {
              id: "questione4",
              question: "What payment methods do you accept?",
              answer:
                "We accept credit cards, bank transfers, and other online payment methods.",
            },
            {
              id: "question5",
              question: "Is there a setup fee or contract?",
              answer:
                "No, we don't charge setup fees or require long-term contracts.",
            },
            {
              id: "question6",
              question: "Can I cancel my subscription at any time?",
              answer:
                "We Provide 7 Days free trial of our software but beyond that we have strictly non-refundable policy.",
            },
            // Add more questions as needed
          ].map((faq) => (
            <div
              key={faq.id}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(faq.id)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform transition-transform ${
                    openQuestion === faq.id ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openQuestion === faq.id && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
