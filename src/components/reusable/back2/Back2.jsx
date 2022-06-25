import React from "react";
import "./back2.css";

const Back2 = ({ name, title, cover }) => {
  return (
    <div className="back2">
      <div className="container">
        <span>{name}</span>
        <h1>{title}</h1>
      </div>
      <img src={cover} alt="" />
    </div>
  );
};

export default Back2;
