import React from "react";
import Header from "../components/Header";
import "../scss/about.scss";
import img1 from "../Assests/c1.jpg";
import img2 from "../Assests/c2.jpg";
import img3 from "../Assests/c3.jpg";
import img4 from "../Assests/c4.jpg";
import img5 from "../Assests/c5.jpg";
import img6 from "../Assests/c6.jpg";

const About = () => {
  return (
    <>
      <Header />
      <div className="PhotoGrid">
        <div className="header">
          <h1>Responsive Image Grid</h1>
          <p>Resize the browser window to see the responsive effect.</p>
        </div>
        <div className="row">
          <div className="column">
            <img src={img1} alt="" style={{ width: "100%" }} />
            <img src={img2} alt="" style={{ width: "100%" }} />
            <img src={img3} alt="" style={{ width: "100%" }} />
            <img src={img4} alt="" style={{ width: "100%" }} />
            <img src={img5} alt="" style={{ width: "100%" }} />
            <img src={img6} alt="" style={{ width: "100%" }} />
          </div>
          <div className="column">
            <img src={img1} alt="" style={{ width: "100%" }} />
            <img src={img2} alt="" style={{ width: "100%" }} />
            <img src={img3} alt="" style={{ width: "100%" }} />
            <img src={img4} alt="" style={{ width: "100%" }} />
            <img src={img5} alt="" style={{ width: "100%" }} />
            <img src={img6} alt="" style={{ width: "100%" }} />
          </div>
          <div className="column">
            <img src={img1} alt="" style={{ width: "100%" }} />
            <img src={img2} alt="" style={{ width: "100%" }} />
            <img src={img3} alt="" style={{ width: "100%" }} />
            <img src={img4} alt="" style={{ width: "100%" }} />
            <img src={img5} alt="" style={{ width: "100%" }} />
            <img src={img6} alt="" style={{ width: "100%" }} />
          </div>
          <div className="column">
            <img src={img1} alt="" style={{ width: "100%" }} />
            <img src={img2} alt="" style={{ width: "100%" }} />
            <img src={img3} alt="" style={{ width: "100%" }} />
            <img src={img4} alt="" style={{ width: "100%" }} />
            <img src={img5} alt="" style={{ width: "100%" }} />
            <img src={img6} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
