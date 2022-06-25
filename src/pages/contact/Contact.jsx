import React from "react";
import img from "../../images/contactus.png";
import Back from "../../components/reusable/back/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="container mt">
          <form className="boxshadow3">
            <h4>Fill The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10"></textarea>
            <button className="btn2">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
