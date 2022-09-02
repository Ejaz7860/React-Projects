import React from "react";
import { useContext } from "react";
import  {userContext } from "../components/Context";

const Com = () => {
  const data = useContext(userContext);
  return (
    <>
      <h2>{`Hello World! ${data}`}</h2>
    </>
  );
};

export default Com;
