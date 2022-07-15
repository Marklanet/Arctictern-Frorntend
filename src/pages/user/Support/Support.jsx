import React from "react";
import "./support.css";
import Nav from "../../../components/common/Nav/Nav";

const Support = () => {
  return (
    <section className="support">
      <Nav heading="Support" />
      <div className="chch">
        <form action="" className="support-form">
          <div className="inputs">
            <span>User Name: </span>
            <input type="text" name="" id="" />
            <span>Subject: </span>
            <input type="text" name="" id="" />
            <span>Phone: </span>
            <input type="text" name="" id="" />
          </div>
          <div className="inputs lststs">
            <span>Message: </span>
            <input type="text" name="" id="" />
            <button type="subbmit" className="btn3">
              Submitt
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Support;
