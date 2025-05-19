// src/components/Counter.jsx
import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0); 

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {count}</h2>
      <Button label="➕ Increment" onClick={increment} />
      <Button label="➖ Decrement" onClick={decrement} />
      <Button label="🔄 Reset" onClick={reset} />
    </div>
  );
};

export default Counter;
