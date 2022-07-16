import React from "react";
import "./ourservices.css";
import { Link } from "react-router-dom";

export default function Ourservices() {
  return (
    <div className="ourservices">
      <div className="upps">
        <div className="some">
          <h2>Research Proporsal</h2>
          <p>
            Worried about your research proposal and submitting it on time?
            Worry no more, Arctictern Writers is a top- help provider in all
            fields. We guarantee:
          </p>
          <div className="some2">
            <ul>
              <li>Free Revision</li>
              <li>100% Originality</li>
              <li>Maintain Standards</li>
            </ul>
            <ul>
              <li>Secure Payment</li>
              <li>Accurate Formatting</li>
              <li>Precise Reference List</li>
            </ul>
          </div>
          <button className="btn2">
            <Link to="/order-now">Order Now</Link>
          </button>
        </div>
        <div className="lft">
          <h2>Custom Essays</h2>
          <p>
            Get our mind-blowing custom persuasive, descriptive, expository, and
            narrative essays. We ensure that the custom essays capture the best
            part of who you truly are as a student. Our essays are:
          </p>
          <div className="some2">
            <ul>
              <li>Original</li>
              <li>Well Written</li>
              <li>Proofread</li>
            </ul>
            <ul>
              <li>Sources properly Cited</li>
              <li>Innovative</li>
            </ul>
          </div>
          <button className="btn2">
            <Link to="/order-now">Order Now</Link>
          </button>
        </div>
      </div>

      <div>
        <div>
          <h2>Case Study</h2>
          <p>
            Are you looking for a reliable company to complete your case study
            assignment with ease? Here at Arctictern Writers, we have a pool of
            qualified writers ready to give high quality work that fits the
            expected format.
          </p>
          <div className="some2">
            <ul>
              <li>Extensively Researched</li>
              <li>Clear Logical</li>
              <li>Properly Referenced</li>
            </ul>
            <ul>
              <li>Affordable Prices</li>
              <li>Experienced Guidance</li>
              <li>Factual Data</li>
            </ul>
          </div>
          <button className="btn2">
            <Link to="/order-now">Order Now</Link>
          </button>
        </div>
        <div className="lft">
          <h2>Literature Review</h2>
          <p>
            Literature Review is not only a summary but also a specified
            detailed evaluation of a individual work or concept in regards to
            theoretical concepts and specific issues raised in your research
            topic. We ensure:
          </p>
          <div className="some2 some33">
            <ul>
              <li>Swift Delivery</li>
              <li>Zero-Plagiarism</li>
              <li>Spell Checking</li>
            </ul>
            <ul>
              <li>Complete Critique</li>
              <li>Expertly Assignments</li>
              <li>Free Unlimited Revisions</li>
            </ul>
          </div>
          <button className="btn2">
            <Link to="/order-now">Order Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
