import React from "react";
import "./order.css";
import Nav from "../../../components/common/Nav/Nav";

const Order = () => {
  return (
    <section className="order">
      <Nav heading="My Orders" />
      <div className="hol">
        <h1>My Orders</h1>
        <div className="ord">
          <ul className="c_flex">
            <li>ORDER NO</li>
            <li>TOPIC</li>
            <li>STATUS</li>
            <li>TYPE OF PAPER</li>
            <li>PAGES(WORDS)</li>
            <li>DEADLINE</li>
            <li> REMAINING</li>
            <li>ACTION</li>
          </ul>
          <span>
            <b>No Order Found!!</b>
          </span>
        </div>
      </div>
      <div className="hol">
        <h1>Orders in Progress</h1>
        <div className="ord">
          <ul className="c_flex">
            <li>ORDER NO</li>
            <li>TOPIC</li>

            <li>TYPE OF PAPER</li>
            <li>PAGES(WORDS)</li>
            <li>DEADLINE</li>
            <li>AMMOUNT PAID </li>
            <li>ACTION</li>
          </ul>
          <span>
            <b>No Order Found!!</b>
          </span>
        </div>
      </div>
      <div className="hol">
        <h1>Completed</h1>
        <div className="ord">
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
      </div>
      <div className="hol mb ">
        <h1>Cancelled</h1>
        <div className="ord ordlst">
          <ul className="c_flex">
            <li>ORDER NO</li>
            <li>TOPIC</li>
            <li>TYPE OF PAPER</li>
            <li>PAGES(WORDS)</li>
            <li>DEADLINE</li>
            <li>ACTION</li>
          </ul>
          <span>
            <b>No Order Found!!</b>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Order;
