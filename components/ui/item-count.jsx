"use client";

import React, { useState } from "react";

const ItemCountInput = ({ initialCount = 1, min = 1, max = 100 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => (prevCount < max ? prevCount + 1 : prevCount));
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > min ? prevCount - 1 : prevCount));
  };

  const handleChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setCount(value);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="text-lg p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200 ease-in-out"
        onClick={decrement}
        disabled={count === min}
      >
        -
      </button>
      <input
        type="number"
        className="w-16 p-2 text-center border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={count}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <button
        className="text-lg p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200 ease-in-out"
        onClick={increment}
        disabled={count === max}
      >
        +
      </button>
    </div>
  );
};

export default ItemCountInput;
