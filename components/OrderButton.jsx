"use client";

import React, { useEffect, useState } from "react";

const OrderButton = () => {
  // State to handle feedback
  const [feedbackMessage, setFeedbackMessage] = useState("");


  const handleClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", { value: 199, currency: "INR" });
      console.log("InitiateCheckout event tracked successfully.");
      
      // Optional: Provide feedback to the user
      setFeedbackMessage("Order initiated successfully!");
    } else {
      console.log("Facebook Pixel is not initialized.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center my-5">
      <a
        onClick={handleClick}
        className="p-4 px-10 btn group mt-5 mb-4 bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white rounded shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-500 to-purple-600 sm:mb-0 animate-pulse"
        href="https://cosmofeed.com/vp/66d61835e12e9a0014f78e0a"
      >
        <span className="relative inline-flex items-center text-lg">
          ⚡Order Now At ₹199{" "}
          <span className="ml-1 tracking-normal text-blue-300 transition-transform duration-300 group-hover:translate-x-1">
            -&gt;
          </span>
        </span>
      </a>
    </div>
  );
};

export default OrderButton;
