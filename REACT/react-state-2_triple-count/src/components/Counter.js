import { useState } from "react";

const increment = 3;

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + increment);
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
