import React from "react";
import "./servicebox.css";
import { Link } from "react-router-dom";

const Servicebox = (props) => {
  return (
    <section className="servicebox flexwrap ">
      {props.services.map((items, index) => (
        <div className="box " key={index}>
          <img src={items.cover} alt="" />
          <h4>
            <Link to={items.path}>{items.name}</Link>
          </h4>
          <label>{items.total}</label>
          <button>Order Now</button>
        </div>
      ))}
    </section>
  );
};

export default Servicebox;
