import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate = "2025-06-29T23:59:59" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      // Set target date - June 29, 2025
      const targetTime = new Date("2025-07-09T23:59:59").getTime();
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown d-flex">
      <div className="single-count-content">
        <span className="count">{timeLeft.days.toString().padStart(2, '0')}</span>
        <p className="text">Days</p>
      </div>
      <div className="single-count-content">
        <span className="count">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <p className="text">Hours</p>
      </div>
      <div className="single-count-content">
        <span className="count">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <p className="text">Minutes</p>
      </div>
      <div className="single-count-content">
        <span className="count">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <p className="text">Seconds</p>
      </div>
    </div>
  );
};

export default Countdown; 