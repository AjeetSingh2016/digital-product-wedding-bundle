"use client";

import { useState } from "react";

const QNASection = () => {
  const qnaList = [
    {
      question: "What software is the bundle compatible with?",
      answer:
        "The bundle is compatible with Lightroom, Photoshop, Premiere Pro, After Effects, Final Cut Pro, Da Vinci Resolve, Sony Vegas, Capture One, Laminar, and Filmora.",
    },
    {
      "question": "How will I get the delivery of my order?",
      "answer": "You will receive the google drive link instantly after the payment is completed."
    },    
    {
      question: "How do I access the resources after purchase?",
      answer:
        "You will receive an instant download link via email immediately after your purchase, providing lifetime access to the bundle.",
    },
    {
      question: "Are the resources in the bundle customizable?",
      answer:
        "Yes, all resources are fully customizable to suit your specific needs and creative vision.",
    },
    {
      question: "Can I use the resources for commercial projects?",
      answer:
        "Yes, you can use all resources in the bundle for both personal and commercial projects.",
    },
    {
      question: "The bundle includes over 2000 Lightroom presets and 1500 Premiere Pro transitions.",
      answer:
        "Yes, our Business and Enterprise packages include e-commerce functionality with advanced features.",
    },
    {
      question: "What is the price of the bundle?",
      answer:
        "The Ultimate Wedding Bundle is available for a limited time at ₹199, significantly discounted from its original price of ₹66,000.",
    },
    {
      question: "What software do I need to use the spreadsheet??",
      answer:
        "The Monthly Budget Spreadsheet is compatible with popular spreadsheet software like Microsoft Excel, Google Sheets, and Apple Numbers.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, our dedicated support team is available to assist you with any questions or issues you may have.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "No, we do not provide any refund policy."
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-10">
      <h1 className="text-center font-bold text-2xl my-5">Got Questions? We got Answers!!!</h1>
      {qnaList.map((qna, index) => (
        <div key={index} className="mb-4 mx-10">
          <div
            className="flex justify-between items-center bg-gray-100 p-2 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="text-base font-medium">{qna.question}</h3>
            <span className="text-xl font-bold">
              {visibleIndex === index ? "-" : "+"}
            </span>
          </div>
          {visibleIndex === index && (
            <div className="p-4 bg-gray-200">
              <p>{qna.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QNASection;
