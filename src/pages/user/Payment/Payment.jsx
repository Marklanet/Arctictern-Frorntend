import React from "react";
import "./payment.css";
import Nav from "../../../components/common/Nav/Nav";

const Payment = () => {
  return (
    <section className="payment mb">
      <Nav heading="Payment" />
      <div className="payhold">
        <h1>No Transactions Found</h1>
      </div>
    </section>
  );
};

export default Payment;
