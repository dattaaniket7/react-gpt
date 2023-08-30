import React, { useState } from "react";

interface HelloWorldProps {}

const HelloWorld: React.FC<HelloWorldProps> = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible && <div>Hello world</div>}
    </div>
  );
};

export default HelloWorld;
