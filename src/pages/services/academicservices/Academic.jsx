import React from "react";
import "./academic.css";
import Back2 from "../../../components/reusable/back2/Back2";
import Heading from "../../../components/reusable/heading/Heading";
import img from "../../../images/happy2.png";
import img2 from "../../../images/about2.png";
import { Link } from "react-router-dom";
import Servicebox from "../servicesbox/Servicebox";
import { academiclist } from "../serviceData";

const Academic = () => {
  return (
    <section className="company mb academic">
      <Back2
        name="Academic Writing"
        title="Academic Papers - Assignments and Research"
        cover={img}
      />

      <div className="flexi c_flex mb">
        <div className="left">
          <Heading
            title="Academic Writing"
            subtitle="Check our academic writing and class content"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button
            className="btn2"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Link to="/">Order Now</Link>
          </button>
        </div>
        <div className="right mt">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="serviceholder container mb mt">
        <Servicebox services={academiclist} />
      </div>
    </section>
  );
};

export default Academic;
