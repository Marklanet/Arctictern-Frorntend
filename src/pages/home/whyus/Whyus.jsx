import React from "react";
import "./whyus.css";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import whyusimg from "../../../images/us.png";

export default function Whyus() {
  return (
    <div className="whyus butonfix">
      <div className="sky">
        <h1>WHY SHOULD YOU USE OUR SERVICES?</h1>
      </div>
      <div className="space">
        <img src={whyusimg} alt="" />
        <div className="whyyouneedus">
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

          <button className="btn2">
            <Link to="/order-now">Place Order Now</Link>
          </button>
        </div>
      </div>

      <div className="earth">
        <h1>OUR SERVICES</h1>
      </div>
    </div>
  );
}
