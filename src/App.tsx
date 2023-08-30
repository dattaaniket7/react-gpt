import React from "react";
import Counter from "./Counter"; // Import the Counter component

const App: React.FC = () => {
  const handleCounterChange = (count: number) => {
    console.log(`Counter changed to: ${count}`);
  };

  return (
    <div>
      {/* Pass the initialCount and onCounterChange props */}
      <Counter initialCount={0} onCounterChange={handleCounterChange} />
    </div>
  );
};

export default App;
