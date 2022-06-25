import React from "react";
import "./footer.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

import payment from "../../../images/pay.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <FaFacebookSquare className="socialicon fb" />
        <FaInstagram className="socialicon in" />
        <FaTwitterSquare className="socialicon tw" />
        <FaLinkedin className="socialicon li" />
      </div>
      <div className="malo">
        <div>
          <h1>Company</h1>
          <h3>About us</h3>
          <h3>Our Services</h3>
          <h3>Contact us</h3>
          <h3>Why We Are The Best</h3>
          <h3>Mission and Vission</h3>
          <h3>Our Blog</h3>
        </div>
        <div>
          <h1>Terms</h1>
          <h3>Terms and Conditions</h3>
          <h3>Privacy Policy</h3>
          <h3>Services</h3>
          <h3>Cookie Policy</h3>
          <h3>Refund Policy</h3>
          <h3>Cancellation Policy</h3>
        </div>
        <div>
          <h1>Resources</h1>
          <h3>How It Works</h3>
          <h3>Free Samples</h3>
          <h3>FAQs</h3>
          <h3>Our Blog</h3>
          <h3>Get Help</h3>
          <h3>Place Order Now</h3>
        </div>
        <div>
          <h1>Quick Links</h1>
          <h3>Home</h3>
          <h3>Services</h3>
          <h3>Pricing</h3>
          <h3>Login</h3>
          <h3>Create Account</h3>
          <h3>Request Samples</h3>
        </div>
      </div>
      <div className="diere">
        <h1>Our Services</h1>
        <div className="hhh">
          <div>
            <h3>Term Paper Writing</h3>
            <h3> Research Paper Writing</h3>
            <h3>IB TOK Essay Writing</h3>
            <h3>Argumentative Essay Writing</h3>
            <h3>Analysis Paper Writing Service</h3>
            <h3>Admission Essay Writing</h3>
            <h3>Article Critique Writing</h3>
          </div>
          <div>
            <h3>Annotated Bibliography Writing</h3>
            <h3>Book Review Writing</h3>
            <h3>Case Study Writing</h3>
            <h3>Literature Review Writing</h3>
            <h3>Marketing Plan Essay Writing</h3>
            <h3>IB Internal Assessment</h3>
            <h3>Finance and Accounting Assignment</h3>
          </div>
          <div>
            <h3> Programming Assignment</h3>
            <h3>Write My Essay for Me</h3>
            <h3>Case Brief Writing</h3>
            <h3>Write My Capstone Project</h3>
            <h3>Extended Essay Writing</h3>
            <h3>Research Proposal Writing</h3>
            <h3>Position Paper</h3>
          </div>
        </div>
      </div>
      <div className="piny">
        <div className="disclaimer">
          <h1>Disclaimer</h1>
          <p>
            Disclaimer: ArcticTern Writers is a consultation company where{" "}
            <br></br>
            clients get assistance to comprehend their different assigned tasks
            <br></br>
            and subsequently tackle them easily.
          </p>
        </div>
        <div className="payment">
          <h1>Payment Accepted</h1>
          <img src={payment} alt="" />
        </div>
      </div>
      <h2>Copyright © 2022 ArticTern Writers. All rights reserved</h2>
      <div className="spacer"></div>
    </div>
  );
}
