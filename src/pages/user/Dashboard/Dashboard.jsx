import React from "react";
import "./dashboard.css";
import userimg from "../../../images/userimg.png";
import recentimg from "../../../images/recent.png";
import { MdMarkEmailRead } from "react-icons/md";

import Nav from "../../../components/common/Nav/Nav";
const Dashboard = () => {
  return (
    <section className="dashboard ">
      <Nav heading="Dashboard" />
      <div className="message ">
        <span>
          <h3>Need an expert writer? There are 32 writers waiting for you.</h3>
          <button>PLACE A NEW ORDER</button>
        </span>
      </div>
      <div className="namerecent ">
        <div className="mmmm ">
          <img src={userimg} alt="" />
          <div className="userdetails">
            <h1>Name</h1>
            <b>Not rated yet</b>
            <b>Registered: Jul 11, 2022</b>
            <span className="c_flex">
              <MdMarkEmailRead className="importedicon" />
              example@gmail.com
            </span>
          </div>
        </div>
        <div className="mmmm">
          <img src={recentimg} alt="" />
          <div className="userdetails">
            <h1>Recent Messages</h1>
            <b>From Support Team</b>
            <b>Received on: Jul 11, 2022</b>
            <span className="c_flex">support@arctictern.com</span>
          </div>
        </div>
      </div>
      <h1 className="uu">Orders in Progress</h1>
      <div className="ord">
        <ul className="c_flex">
          <li>ORDER NO</li>
          <li>TOPIC</li>
          <li>STATUS</li>
          <li>TYPE OF PAPER</li>
          <li>PAGES(WORDS)</li>
          <li>DEADLINE</li>
          <li>ACTION</li>
        </ul>
        <span>
          <b>No Order Found!!</b>
        </span>
      </div>
      <h1 className="uu">Pending Payments</h1>
      <div className="ord">
        <ul className="c_flex">
          <li>S. NO.</li>
          <li>ORDER NO</li>
          <li>AMOUNT REQUESTED</li>
          <li>DATE</li>
          <li>ACTION</li>
        </ul>
        <span>
          <b>No Order Found!!</b>
        </span>
      </div>
      <h1 className="uu">Orders</h1>
      <div className="ord ordlst mb">
        <ul className="c_flex">
          <li>ORDER NO</li>
          <li>TOPIC</li>
          <li>TYPE OF PAPER</li>
          <li>PAGES(WORDS)</li>
          <li>AMMOUNT PAID</li>
          <li>ACTION</li>
        </ul>
        <span>
          <b>No Order Found!!</b>
        </span>
      </div>
    </section>
  );
};

export default Dashboard;
