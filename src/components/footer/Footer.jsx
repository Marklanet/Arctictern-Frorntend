import React from "react";
import "./footer.css";
import facebook from "../../images/facebook.png";
import instergram from "../../images/instergram.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";
import payment from "../../images/pay.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <img src={facebook} alt="facebook" />
        <img src={instergram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
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
          <h1>Company</h1>
          <h3>About us</h3>
          <h3>Our Services</h3>
          <h3>Contact us</h3>
          <h3>Why We Are The Best</h3>
          <h3>Mission and Vission</h3>
          <h3>Our Blog</h3>
        </div>
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
          <h1>Company</h1>
          <h3>About us</h3>
          <h3>Our Services</h3>
          <h3>Contact us</h3>
          <h3>Why We Are The Best</h3>
          <h3>Mission and Vission</h3>
          <h3>Our Blog</h3>
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
      <h1>Copyright © 2022 ArticTern Writers. All rights reserved</h1>
      <div className="spacer"></div>
    </div>
  );
}
