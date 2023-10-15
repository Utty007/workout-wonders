/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(120);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);
    
    if (timeRemaining < 0) {
        setTimeRemaining(0)
    }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px', // Adjust this value to change the vertical position
        right: '5%',
        backgroundColor: 'rgb(255, 83, 0)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        zIndex: '10',
        boxShadow: '1px 0px 10px rgb(0 0 0 / 20%)',
        fontSize: '20px',
      }}
    >
      {timeRemaining !== 0 || timeRemaining < 0? `Free access ends in ${timeRemaining} seconds!` : `Time Up`}
    </div>
  );
};

export default CountdownTimer;
