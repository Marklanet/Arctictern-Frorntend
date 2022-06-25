import React from "react";
import "./heading.css";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="heading">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Heading;
