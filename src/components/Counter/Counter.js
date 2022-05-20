import React, { useState } from "react";

export const Counter = () => {
  const [number, setNumber] = useState(0);
  let counterClass = 0;

  if (number === 0) {
    counterClass = "reset";
  } else if (number > 0) {
    counterClass = "incr";
  } else {
    counterClass = "decr";
  }
  return (
    <div className="counter--box">
      <div className="counter--count">
        <span className={counterClass}>{number}</span>
      </div>
      <div className="counter--btns">
        <button className="decr" onClick={() => setNumber(number - 1)}>
          Decrease
        </button>
        <button className="reset" onClick={() => setNumber(0)}>
          Reset
        </button>
        <button className="incr" onClick={() => setNumber(number + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
};
