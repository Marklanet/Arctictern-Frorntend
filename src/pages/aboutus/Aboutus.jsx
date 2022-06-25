import React from "react";
import Back2 from "../../components/reusable/back2/Back2";
import Heading from "../../components/reusable/heading/Heading";
import img from "../../images/about.jpg";
import img2 from "../../images/us2.jpg";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <>
      <section className="about mb4 mb">
        <Back2 name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="flexi c_flex ">
          <div className="left ">
            <Heading
              title="Our Writing Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right mt">
            <img src={img2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
