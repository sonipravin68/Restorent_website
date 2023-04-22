import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  const [state, setstate] = useState(0);

  useEffect(() => {
    // console.log("hii");
    // document.title = `chats(${state})`;
  });
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
      </div>
    </>
  );
};

export default UseEffect;
