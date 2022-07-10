import React from "react";
import "./back.css";

const Back3 = ({ name, title, cover, description }) => {
  return (
    <div className="back3">
      <div className="container">
        <div className="lee">
          <span>{name}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="buts">
            <button className="btn3">Free Samples</button>
            <button className="btn2">Place Order</button>
          </div>
        </div>
        <div className="rii ">
          <h4>Why hire us to handle your {title}</h4>
          <div className="assuarance ">
            <li>Timely deliverry</li>
            <li>Special discounts up to 50%</li>
            <li>High quality work</li>
            <li>0.00 Plagiarism content</li>
            <li>Free revision on request</li>
            <li>Secure Payment </li>
            <li>Accurate formating</li>
          </div>
        </div>
      </div>
      <img src={cover} alt="" />
    </div>
  );
};

export default Back3;
