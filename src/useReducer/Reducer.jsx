import React from "react";
import { useReducer } from "react";

let intialState = 0;

const Reducer = () => {
  function reducer (state, action) {

  // eslint-disable-next-line default-case
  switch(action.type){
    case 'ADD': {
        return {
            state : state +=  1
        }
    }
    case 'DEC' : {
        return {
            state : state -= 1
        }
    }
    
    case 'Reset' : {
        return {
            state: state * 0
        }
    }
  }

    // if (action.type === "ADD") {
    //   return (state = state + 1);
    // } else if (action.type === "DEC") {
    //   return (state = state > 0 ? state - 1 : 0); 
    // } else if (action.type === "Reset") {
    //   return (state = state * 0);
    // }

  };

  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Use Reducer Example</h1>
      <button
        style={{
          width: "120px",
          border: "none",
          background: "darkblue",
          padding: "10px 5px",
          color: "white",
          margin: "10px 5px",
          fontSize: "1rem",
          borderRadius: "5px",
        }}
        onClick={() => dispatch({ type: "ADD" })}
      >
        ADD
      </button>
      <button
        style={{
          width: "120px",
          border: "none",
          background: "darkblue",
          padding: "10px 5px",
          color: "white",
          margin: "10px 5px",
          fontSize: "1rem",
          borderRadius: "5px",
        }}
        onClick={() => dispatch({ type: "Reset" })}
      >
        Reset
      </button>
      <button
        style={{
          width: "120px",
          border: "none",
          background: "darkblue",
          padding: "10px 5px",
          color: "white",
          margin: "10px 5px",
          fontSize: "1rem",
          borderRadius: "5px",
        }}
        onClick={() => dispatch({ type: "DEC" })}
      >
        DEC
      </button>
      <div>
        <p>{state}</p>
      </div>
    </div>
  );
};

export default Reducer;
