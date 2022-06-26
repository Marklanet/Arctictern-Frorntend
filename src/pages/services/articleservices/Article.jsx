import React from "react";
import "./article.css";
import Back2 from "../../../components/reusable/back2/Back2";
import Heading from "../../../components/reusable/heading/Heading";
import img from "../../../images/services.jpg";
import img2 from "../../../images/about2.png";
import { Link } from "react-router-dom";
import Servicebox from "../servicesbox/Servicebox";
import { articlelist } from "../serviceData";

const Article = () => {
  return (
    <section className="company mb ">
      <Back2
        name="Article Writing"
        title="Reading - Articles and Web Content"
        cover={img}
      />

      <div className="flexi c_flex mb mt">
        <div className="left ">
          <Heading
            title="Article Writing"
            subtitle="Check out our article writing and web content"
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
        <Servicebox services={articlelist} />
      </div>
    </section>
  );
};

export default Article;
