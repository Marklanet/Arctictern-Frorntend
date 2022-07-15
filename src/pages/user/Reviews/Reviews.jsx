import React from "react";
import "./reviews.css";
import Nav from "../../../components/common/Nav/Nav";

const Reviews = () => {
  return (
    <section className="reviews">
      <Nav heading="Reviews" />
      <div className="chch">
        <div className="revhold">
          <h1>No Reviews Found</h1>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
