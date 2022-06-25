import React from "react";
import "./screen.css";
import staticimg from "../../../images/eight.png";
import Ordernow from "../../../components/ordernow/Ordernow";
export default function Screen() {
  return (
    <div className="screen">
      <img src={staticimg} alt="" />
      <div className="ontop">
        <div className="left">
          <div className="formm ">
            <h1>
              Are You Stuck With Your<br></br> Assignment Or Web Content?
            </h1>
            <p>
              Our expert researchers and content writers are at your service.
            </p>
            <h2>Our Guarantee</h2>
            <li>Timely completion of your project</li>
            <li> High-quality project and research paper</li>
            <li>100% unique content (Plagiarism free)</li>
            <li> Secure Payment method</li>
            <li>Accurate formatting</li>
            <li>FREE cover, Abstract, and Reference pages</li>
            <li>Free Revision ( If any)</li>
            <li> Special discount of up to 50% on your first order</li>
            <div className="buttcont">
              <button>Free Samples</button>
              <button className="reviewbut">Reviews 4.8</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="form pud4">
            <h1>Calculate The Price</h1>
            <Ordernow />
          </div>
        </div>
      </div>
    </div>
  );
}
