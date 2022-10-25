import React from "react";
import { Link } from "react-router-dom";
const Headrs = () => {
  return (
    <nav>
      <h1>CodeServices.</h1>
      <main>
        <Link to={"/home"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/#about"}>About</Link>
        <Link to={"/#brand"}>Brand</Link>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Headrs;
