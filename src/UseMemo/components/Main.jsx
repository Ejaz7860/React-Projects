import React from "react";
import { useState, useMemo } from "react";
import Todo from "./Todo";
const Main = () => {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0);

  const inc = () => {
    setCount((c) => c + 1);
  };

  const incTwo = () => {
    console.log(">>>>>>>>>");

    setTest((c) => c + 14);
  };

  const Even = useMemo(() => {
    console.log(",,,,,,,,,,,,,,,");
    let i = 0;
    while (i < 20000000) i++;
    return count % 2 === 0;
  }, [count]);
  return (
    <>
      {/* <Todo todos={test}/> */}
      <hr />
      <div style={{ margin: "20px 50px" }}>
        Count: {count}
        Test : {test}
        <button
          style={{
            background: "blue",
            color: "#fff",
            height: "40",
            width: "120px",
            border: "4px",
          }}
          onClick={inc}
        >
          count
        </button>
        <span>{Even ? "Even" : "ODD"}</span>
        <button
          style={{
            background: "black",
            color: "#fff",
            height: "40",
            width: "120px",
            border: "4px",
          }}
          onClick={incTwo}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Main;
