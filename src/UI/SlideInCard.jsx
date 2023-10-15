/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const SlideInCard = ({ onClose }) => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setShowCard(true);
  }, []);

  const closeCard = () => {
    setShowCard(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: showCard ? '20px' : '-100px',
        right: '5%',
        backgroundColor: 'rgb(255, 83, 0)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        zIndex: '10',
        boxShadow: '1px 0px 10px rgb(0 0 0 / 20%)',
        fontSize: '20px',
        transition: 'bottom 0.5s', maxWidth: '400px'
      }}
    >
      {showCard ? (
              <>
            <a href="https://contentlocked.net/cl/i/5kvk3v" target="_blank" ><button
            onClick={closeCard}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
           Hurry Up and click to get access now, or you will have to pay to get access later. <br /><br />Click here now!!!
          </button></a>
        </>
      ) : null}
    </div>
  );
};

export default SlideInCard;
