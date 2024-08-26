// components/Countdown.jsx
'use client';
import React, { useEffect, useState } from 'react';

const Countdown = ({textColor}) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextMidnight = new Date();
      nextMidnight.setHours(24, 0, 0, 0); // Set to the next midnight

      const timeDifference = nextMidnight - now;
      const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
      const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft(); // Initial calculation

    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={{color: textColor}} className="text-2xl font-mono">
        <span>{String(timeLeft.hours).padStart(2, '0')}:</span>
        <span>{String(timeLeft.minutes).padStart(2, '0')}:</span>
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
    </div>
  );
};

export default Countdown;
