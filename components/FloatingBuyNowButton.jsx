// components/FloatingBuyNowButton.jsx
'use client';

import React from 'react';

const FloatingBuyNowButton = () => {
  const handleClick = () => {
    // Replace the URL with your checkout or purchase page URL
    window.location.href = 'https://your-checkout-page-url.com';
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-16 right-4 z-60 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Buy Now"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </button>
  );
};

export default FloatingBuyNowButton;
