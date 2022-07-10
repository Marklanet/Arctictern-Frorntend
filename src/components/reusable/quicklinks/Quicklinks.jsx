import React from "react";
import "./quicklinks.css";
import { Link } from "react-router-dom";

const Quicklinks = () => {
  return (
    <div className="quicklinks">
      <h2>Quick Links</h2>
      <ul>
        <li>
          <Link to="/">Refund Policy</Link>
        </li>
        <li>
          <Link to="/">Cancellation Policy</Link>
        </li>
        <li>
          <Link to="/">Terms & Conditions</Link>
        </li>

        <li>
          <Link to="/">FAQ</Link>
        </li>
        <li>
          <Link to="/">How it Works</Link>
        </li>
        <li>
          <Link to="/services/academic">Assignment Services</Link>
        </li>
        <li>
          <Link to="/services/article">Article Services</Link>
        </li>
        <li>
          <Link to="/aboutus">About</Link>
        </li>
        <li>
          <Link to="/whyus">Why choose us</Link>
        </li>
        <li>
          <Link to="/company">Vision and Mission</Link>
        </li>
      </ul>
    </div>
  );
};

export default Quicklinks;
