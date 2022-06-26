import React from "react";
import "./servicebox.css";

const Servicebox = (props) => {
  return (
    <section className="servicebox flexwrap ">
      {props.services.map((items, index) => (
        <div className="box " key={index}>
          <img src={items.cover} alt="" />
          <h4>{items.name}</h4>
          <label>{items.total}</label>
        </div>
      ))}
    </section>
  );
};

export default Servicebox;
