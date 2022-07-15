import React from "react";
import { useNavigate } from "react-router-dom";
import "./orderform.css";
import { spacing, type, level } from "./Orderdata";
import { singleserice } from "../../pages/services/singleservice/singleServiceData";

const Orderform = () => {
  const navigate = useNavigate();
  const discount = 0.3;
  const pages = [];
  for (let i = 1; i < 201; i++) {
    pages.push(`${i} pages / ${i * 275} words`);
  }
  const [price, setPrice] = React.useState(0);
  const [formData, setFormData] = React.useState({
    CATEGORY: "",
    TYPE: "1",
    PAGES: "1",
    SPACING: "1",
    LEVEL: "1",
    DEADLINE: "1",
  });

  const handleChange = (event) => {
    //const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handlePrice = (e) => {
    e.preventDefault();
    const pagefilter = formData.PAGES.split(" ");
    const totalprice =
      20 *
      formData.LEVEL *
      formData.SPACING *
      formData.TYPE *
      (pagefilter[0] * 0.5);
    setPrice(totalprice);
  };
  const handleOrder = (e) => {
    e.preventDefault();
    navigate("/login", { replace: true });
  };

  return (
    <section className="orderform ">
      <form onSubmit={handlePrice}>
        <div className="boxx">
          <span>PAPER TYPE</span>
          <select name={"TYPE"} onChange={handleChange}>
            {type.map((list, index) => (
              <option key={index} value={list.value}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
        <div className="boxx">
          <span>PAPER CATEGORY</span>
          <select name={"CATEGORY"} onChange={handleChange}>
            {singleserice.map((list, index) => (
              <option key={index} value={list.name}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
        <div className="boxx">
          <span>PAGES(WORDS)</span>
          <select name={"PAGES"} onChange={handleChange}>
            {pages.map((pages, index) => (
              <option key={index} value={pages.index}>
                {pages}
              </option>
            ))}
          </select>
        </div>
        <div className="boxx">
          <span>SPACING</span>
          <select name={"SPACING"} onChange={handleChange}>
            {spacing.map((list, index) => (
              <option key={index} value={list.value}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
        <div className="boxx">
          <span>LEVEL</span>
          <select name={"LEVEL"} onChange={handleChange}>
            {level.map((list, index) => (
              <option key={index} value={list.value}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
        <div className="boxx">
          <button className="btn3" type="submit">
            Calculate Price
          </button>

          <div className="price">
            <span>{price} $USD</span>
            <b>{price * (1 - discount)} $USD</b>
          </div>

          <button className="btn3" onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </form>
    </section>
  );
};

export default Orderform;
