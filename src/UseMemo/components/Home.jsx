import React from "react";
import { useState, useMemo } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [item, setItem] = useState(0);

  const newValue = useMemo(
    function multiCount() {
      console.log("");
      return counter * 8;
    },
    [counter]
  );
  const hello = useMemo(
    function multiCount() {
      console.log("");
      return counter * 8;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item]
  );


  return (
    <div>
      <h1>UseMemo Hook in React</h1>
      <h4>Count : {counter}</h4>
      <h3>Item : {item}</h3>
      <h2>{hello}</h2>
      {newValue}
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <button onClick={() => setItem(item + 1)}>item</button>
    </div>
  );
};

export default Home;
