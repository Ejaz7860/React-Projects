import React from "react";
import { useState } from "react";
import { sum } from "./sum";

const Home = () => {
  const [admin, setAdmin] = useState(false);
  return (
    <>
      <h1>This is code spliting tutorial</h1>
      {admin ? <Admin /> : "You are Not Admin"}
      <button>click</button>
    </>
  );
};

export default Home;

const Admin = () => {
  return (
    <>
      <h1>Hi, Admin How are you</h1>
    </>
  );
};
