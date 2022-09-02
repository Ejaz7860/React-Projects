import React, { useState, createContext } from "react";
import Com from "../Pages/Com";
export const userContext = createContext();

const Context = () => {
  const [state, setState] = useState(0);
  return (
    <userContext.Provider value={state}>
      <h3>{state}</h3>
      <button
        style={{
          border: "none",
          padding: "20px 60px",
          background: "blue",
          color: "white",
          fontSize: "16px",
          fontWeight: 700,
        }}
        onClick={(e) => setState(state + 1)}
      >
        click
      </button>
      <Com />
    </userContext.Provider>
  );
};

export default Context;
