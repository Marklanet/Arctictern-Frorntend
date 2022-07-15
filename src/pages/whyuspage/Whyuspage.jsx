import React from "react";
import "./whyuspage.css";
import why from "../../images/why.png";
import img from "../../images/whyus.png";
import Back2 from "../../components/reusable/back2/Back2";
import Quicklinks from "../../components/reusable/quicklinks/Quicklinks";

import { GiCheckMark } from "react-icons/gi";

const Whyuspage = () => {
  return (
    <div className="whyuspage">
      <Back2
        name="Why Us"
        title="Why Us - Why Choose Our Platform?"
        cover={img}
      />
      <div className="container mb">
        <div className="flexwrap">
          <img src={why} alt="" />
          <div className="word">
            <h2>Why would you want to access our services?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              cupiditate amet fuga, illo repellat temporibus debitis eius quod
              porro necessitatibus saepe asperiores tempore odio. Illo
              dignissimos eveniet recusandae aut eos. eius natus provident,
            </p>
          </div>
        </div>
        <div className="flexwrap">
          <div className="whyyouneedus">
            <h2>Why choose our platform?</h2>
            <ul>
              <li>
                <GiCheckMark className="listicon" />
                We relieve you of your project/ assignment burden
              </li>
              <li>
                <GiCheckMark className="listicon" />
                We guarantee timely delivery and high-quality work
              </li>
              <li>
                <GiCheckMark className="listicon" />
                We provide 24/7 support to our clients
              </li>
              <li>
                <GiCheckMark className="listicon" />
                The company has highly qualified experts who will synthesize and
                demystify your project to deliver quality work.
              </li>
              <li>
                <GiCheckMark className="listicon" />
                We constantly upgrade our software with the latest trends in
                business and academia.
              </li>
              <li>
                <GiCheckMark className="listicon" />
                We offer a discount on your first order with us
              </li>
              <li>
                <GiCheckMark className="listicon" />
                Free revision until you get satisfied
              </li>
            </ul>
            <button>Place Order Now</button>
          </div>
          <div className="hold">
            <Quicklinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyuspage;
