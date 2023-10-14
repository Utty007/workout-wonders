/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px', // Adjust this value to change the vertical position
        // left: '80%',
        transform: 'translateX(-20%)',
        right: '0',
        backgroundColor: 'rgb(255, 83, 0)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        zIndex: '10',
        fontSize: '24px',
      }}
    >
      Offer ends in {timeRemaining} seconds!
    </div>
  );
};

export default CountdownTimer;
