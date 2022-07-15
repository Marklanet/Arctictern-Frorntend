import React from "react";
import "./nav.css";
import { FaBell } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";

const Nav = ({ heading }) => {
  return (
    <div className="navbar c_flex boxshadow1">
      <h1>{heading}</h1>

      <div className="c_flex">
        <div className="c_flex">
          <FaBell className="importedicon" />
          <b>1</b>
        </div>

        <span className="c_flex">
          <BsPersonSquare className="importedicon" />
          <h4>My Account</h4>
        </span>
      </div>
    </div>
  );
};

export default Nav;
