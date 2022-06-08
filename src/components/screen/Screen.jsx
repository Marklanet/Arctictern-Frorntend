import React from "react";
import "./screen.css";
import staticimg from "../../images/eight.png";
import Ordernow from "../ordernow/Ordernow";
export default function Screen() {
  return (
    <div className="screen">
      <img src={staticimg} alt="" />
      <div className="ontop">
        <div className="left">
          <div className="formm">
            <h1>
              Looking For A Reliable <br></br> Assessment Writing Service?
            </h1>
            <p>
              Let our expert writers ease your pressure on deadlines and help
              you complete your assignment on time
            </p>
            <h2>Our Strengths</h2>
            <li>Timely Delivery</li>
            <li>Real-time Communication</li>
            <li>Plagiarism free assessments</li>
            <li>Thoroughly researched work</li>
            <div className="buttcont">
              <button>Free Samples</button>
              <button className="reviewbut">Reviews 4.8</button>
            </div>
            <div className="spacer" />
          </div>
        </div>
        <div className="right">
          <div className="form">
            <h1>Calculate The Price</h1>
            <Ordernow />
            <div className="spacer" />
          </div>
        </div>
      </div>
    </div>
  );
}
