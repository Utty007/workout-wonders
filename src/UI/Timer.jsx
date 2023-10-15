/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ onTimerComplete }) => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  useEffect(() => {
    if (timeRemaining <= 0) {
      onTimerComplete();
    }
  }, [timeRemaining, onTimerComplete]);

  return (
    <div style={{
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
      }}>
      {timeRemaining !== 0 ? `Free access ends in ${timeRemaining} seconds!` : null}
    </div>
  );
};

export default CountdownTimer;
