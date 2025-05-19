// src/components/Button.jsx
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ margin: '5px', padding: '10px' }}>
      {label}
    </button>
  );
};

export default Button;
