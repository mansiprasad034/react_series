// src/components/ToggleMessage.jsx
import React, { useState } from 'react';
import Button from './Button';

const ToggleMessage = () => {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Button label={show ? 'Hide Message' : 'Show Message'} onClick={toggle} />
      {show && <p style={{ fontSize: '18px' }}>🎉 You toggled the message!</p>}
    </div>
  );
};

export default ToggleMessage;
