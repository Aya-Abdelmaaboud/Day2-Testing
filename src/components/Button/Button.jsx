import React from 'react';

const DynamicButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default DynamicButton;

