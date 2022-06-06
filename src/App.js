import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const Reset = () => setCount(0);
  const double = () => setCount(count * 2);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={double}>×2</button>
    </>
  );
};

export default App;
