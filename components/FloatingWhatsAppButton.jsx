// components/FloatingWhatsAppButton.jsx
'use client';

import React from 'react';

const FloatingWhatsAppButton = () => {
  const phoneNumber = "+918765412933"; // Replace with your phone number
  const message = "Hello! I'm interested in learning more about your Ultimate Wedding Photography & Videography Bundle"; // Predefined message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="fixed bottom-4 right-4 z-50 p-3 bg-green-500 rounded-full shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 2.123.552 4.097 1.528 5.813L0 24l6.282-1.635A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.805 17.293l-.949.458a.96.96 0 01-1.038-.141c-.567-.465-1.062-.995-1.515-1.575-.393-.504-.775-1.022-1.187-1.52-.35-.429-.701-.775-1.172-.979a.972.972 0 00-.764-.019 2.36 2.36 0 01-.734.179c-.25.034-.5-.017-.739-.099a4.613 4.613 0 01-.981-.465c-.565-.327-1.073-.742-1.529-1.207-.406-.405-.756-.868-1.048-1.367a2.294 2.294 0 01-.47-.915c-.106-.489.084-.921.31-1.345.157-.301.333-.594.535-.87.227-.308.462-.611.723-.89.253-.27.542-.479.854-.637.17-.084.332-.198.518-.193.448.014.853.208 1.264.318.397.105.795.225 1.19.353a2.25 2.25 0 011.118.674c.373.373.747.747 1.121 1.12.37.371.734.747 1.092 1.13.21.231.418.463.625.694.235.264.481.526.694.804.306.396.624.774.914 1.18.249.361.49.729.741 1.089.121.177.231.36.378.517.182.193.15.426-.016.621z"
        />
      </svg>
    </a>
  );
};

export default FloatingWhatsAppButton;
