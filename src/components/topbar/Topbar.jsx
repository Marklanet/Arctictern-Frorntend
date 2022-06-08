import React, { useState } from "react";
import "./topbar.css";
import whitelogo from "../../images/whitelogo.png";
import search from "../../images/search.png";
import togle from "../../images/togle.png";
import untogle from "../../images/untogle.png";

export default function Topbar() {
  const [click, setClick] = useState(false);
  //const [isSmallScreen, setisSmallScreen] = useState(false);

  const handleClick = () => {
    setClick(click === false ? true : false);
  };

  return (
    <div className="topbar">
      <div className="imgname">
        <img src={whitelogo} alt="" />
        <div className="name">
          <h2>ARCTIC TERN</h2>
          <h3>WRITERS</h3>
        </div>
      </div>

      <ul className={click ? "smallscreen" : "largescreen"}>
        <h2>Company</h2>
        <h2>Services</h2>
        <h2>Pricing</h2>
        <h2>Order Now</h2>
        <h2>Contact Us</h2>
        <h2>Blog</h2>
        <h2>Login</h2>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search.." />
        <img src={search} alt="" />
      </div>
      <div className="togle">
        {click === true ? (
          <img
            src={untogle}
            alt=""
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          />
        ) : (
          <img
            src={togle}
            alt=""
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          />
        )}
      </div>
    </div>
  );
}
