import React, { useState, useEffect } from "react";

interface CounterProps {
  initialCount: number;
  onCounterChange: (count: number) => void;
}

const Counter: React.FC<CounterProps> = ({ initialCount, onCounterChange }) => {
  const [count, setCount] = useState<number>(initialCount);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCounterChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onCounterChange(newCount);
  };

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
