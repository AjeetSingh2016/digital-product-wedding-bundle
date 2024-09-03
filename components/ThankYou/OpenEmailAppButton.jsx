import React from 'react';

const OpenEmailAppButton = () => {
  const handleRedirect = () => {
    const mailtoLink = 'mailto:';
    window.location.href = mailtoLink;
  };

  return (
    <button
      onClick={handleRedirect}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Open Email App
    </button>
  );
};

export default OpenEmailAppButton;
