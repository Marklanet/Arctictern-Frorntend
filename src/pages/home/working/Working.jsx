import React from "react";
import "./working.css";
import howitworks from "../../../images/working.png";
import howitworks2 from "../../../images/payment.png";
import howitworks3 from "../../../images/happy.png";

export default function Working() {
  return (
    <div className="working">
      <h1>HOW IT WORKS</h1>
      <div className="zote mb4">
        <div className="one1">
          <div className="imgtxt">
            <img src={howitworks} alt="" />
            <h1>Place Your Order</h1>
          </div>
          <p>
            To place your order, kindly fill the Order Now form, available at
            the top of the screen.
          </p>
          <h1>1</h1>
        </div>
        <div className="two2">
          <div className="imgtxt">
            <img src={howitworks2} alt="" />
            <h1>Make Payment</h1>
          </div>
          <p>
            Please make payment for your order via our secure gateway. Payment
            reflects in realtime
          </p>
          <h1>2</h1>
        </div>
        <div className="ree3">
          <div className="imgtxt">
            <img src={howitworks3} alt="" />
            <h1>Get Your Document</h1>
          </div>
          <p>
            Receive top quality and plagiarism-free paper from our writers
            before the stipulated timeframe.
          </p>
          <h1>3</h1>
        </div>
      </div>
    </div>
  );
}
