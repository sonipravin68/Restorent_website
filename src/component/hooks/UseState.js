import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const [state, setstate] = useState(0);
  console.log(state);
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => setstate(state + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() =>
            state > 0 ? setstate(state - 1) : setstate((state = 0))
          }
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
