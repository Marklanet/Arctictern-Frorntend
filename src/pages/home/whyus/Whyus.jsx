import React from "react";
import "./whyus.css";

import whyusimg from "../../../images/us.jpg";

export default function Whyus() {
  return (
    <div className="whyus">
      <div className="sky">
        <h1>WHY SHOULD YOU USE OUR SERVICES?</h1>
      </div>
      <div className="space">
        <img src={whyusimg} alt="" />
        <div className="whyyouneedus">
          <ul>
            <li>We relieve you of your project/ assignment burden</li>
            <li>We guarantee timely delivery and high-quality work</li>
            <li>We provide 24/7 support to our clients</li>
            <li>
              The company has highly qualified experts who will synthesize and
              demystify your project to deliver quality work.
            </li>
            <li>
              We constantly upgrade our software with the latest trends in
              business and academia.
            </li>
            <li>We offer a discount on your first order with us</li>
            <li>Free revision until you get satisfied</li>
          </ul>
          <button>Place Order Now</button>
        </div>
      </div>

      <div className="earth">
        <h1>OUR SERVICES</h1>
      </div>
    </div>
  );
}
