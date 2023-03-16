import React from 'react';
import './MicButton.css';

const MicButton = () => {
    const handleClick = () => {
        console.log('Mic button clicked');
        // Add your mic button functionality here
      };
  return (
    <button className="mic-button" onClick={handleClick} >
      <div className="mic-icon">
        <div className="mic-head"></div>
        <div className="mic-body"></div>
      </div>
    </button>
  );
};

export default MicButton;
