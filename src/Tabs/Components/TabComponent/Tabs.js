import React, { useState } from "react";
import "../css/index.css";
import Staff from "../Main/Staff";
import Students from "../Main/Students";

const Tabs = () => {
  const [active, setActive] = useState("tab1");
  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={active === "tab1" ? "active" : ""}
          onClick={() => setActive("tab1")}
        >
          Students
        </li>
        <li
          className={active === "tab2" ? "active" : ""}
          onClick={() => setActive("tab2")}
        >
          Staff
        </li>
      </ul>
      <div className="outlet">
        {active === "tab1" ? <Students /> : <Staff />}
      </div>
    </div>
  );
};
export default Tabs;
