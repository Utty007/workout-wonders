/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const PopUpCard = ({ name, country, onClose, onClick }) => (
  <div
    style={{
      position: 'fixed',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '16px',
      zIndex: '999',
      display: 'flex',
      justifyContent: 'space-between',
      width: '300px',
    }}
  >
    <div>
      {name} from {country} has gotten free access to the Program
    </div>
    <button onClick={`${onClose} ${onClick}`} style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
      Close
    </button>
  </div>
);

export default PopUpCard