import React from "react";
import "./whyus.css";

import whyusimg from "../../images/us.jpg";

export default function Whyus() {
  return (
    <div className="whyus">
      <div className="sky">
        <h1>WHY YOU NEED OUR SERVICES</h1>
      </div>
      <div className="space">
        <img src={whyusimg} alt="" />
        <div className="whyyouneedus">
          <p>
            Are you worked up because of your academic work? Will you work on
            that assessment or assignment before the deadline and get A-grades?
            Are you encountering difficulties approaching that assessment or
            assignment? Well, don't feel alone. Arctictern Writers offers the
            best academic assistance.Arctictern Writers is an expert-only
            registered enterprise based online with the primary objective of
            assisting worked up individuals just like you. We will help achieve
            your goal.
          </p>
          <button>Place Order Now</button>
        </div>
      </div>

      <div className="earth">
        <h1>OUR SERVICES</h1>
      </div>
    </div>
  );
}
