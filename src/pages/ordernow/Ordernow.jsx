import React from "react";
import "./ordernow.css";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/common/Nav/Nav";
import {
  spacing,
  type,
  level,
  style,
  source,
} from "../../components/orderform/Orderdata";
import { singleserice } from "../../pages/services/singleservice/singleServiceData";

const Ordernow = () => {
  const navigate = useNavigate();

  const pages = [];
  for (let i = 1; i < 201; i++) {
    pages.push(`${i} pages / ${i * 275} words`);
  }
  const reference = [];
  for (let i = 1; i < 101; i++) {
    reference.push(i);
  }
  const [price, setPrice] = React.useState(0);
  const [formData, setFormData] = React.useState({
    CATEGORY: "",
    TYPE: "1",
    STYLE: "APA",
    PAGES: "1",
    SPACING: "1",
    LEVEL: "19",
    DEADLINE: "1",
    TOPIC: "not selected",
    SUBJECT: "not selected",
    REFERENCES: "1",
    CURRENCY: "USD",
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
      formData.LEVEL *
      formData.SPACING *
      formData.DEADLINE *
      (pagefilter[0] * 1);
    setPrice(totalprice);
  };
  const handleOrder = (e) => {
    e.preventDefault();
    navigate("/login", { replace: true });
  };

  return (
    <section className="ordernow">
      <Nav heading={"Place Order"} />

      <div className="progress boxshadow1">
        <div>
          <div className="a ">1</div>
          <span>Fill Order Details</span>
        </div>
        <div>
          <div className="b line-right">2</div>
          <span>Preview Details</span>
        </div>
        <div>
          <div className="c line-right">3</div>
          <span>Make Payment</span>
        </div>
        <div>
          <div className="d line-right">4</div>
          <span>Track Progress</span>
        </div>
      </div>
      <h1 className="heading">Order Details</h1>
      <form onSubmit={handlePrice} className="basicdetails">
        <h1>Basic Information</h1>
        <div className="boxx">
          <span>TOPIC </span>
          <input
            type="text"
            placeholder="Enter Topic"
            onChange={handleChange}
            name={"TOPIC"}
          />
        </div>
        <div className="boxx">
          <span>SUBJECT</span>
          <input
            type="text"
            placeholder="Enter Subject"
            onChange={handleChange}
            name={"SUBJECT"}
          />
        </div>
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
          <span>QUALITY LEVEL</span>
          <select name={"LEVEL"} onChange={handleChange}>
            {level.map((list, index) => (
              <option key={index} value={list.value}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
        <div className="boxx">
          <span>CURRENCY</span>
          <select name={"CURRENCY"} onChange={handleChange}>
            <option value="USD">USD</option>
          </select>
        </div>
        <div className="boxx">
          <span>INSTRUCTIONS</span>
          <textarea cols="1" rows="3"></textarea>
        </div>
        <h1>Additional Information</h1>
        <div className="boxx">
          <span>LINE SPACING</span>
          <select name={"SPACING"} onChange={handleChange}>
            {spacing.map((list, index) => (
              <option key={index} value={list.value}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
        <div className="boxx">
          <span>SOURCES</span>
          <select name={"SOURCES"} onChange={handleChange}>
            {source.map((list, index) => (
              <option key={index} value={list.name}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
        <div className="boxx">
          <span>REFERENCES</span>
          <select name={"REFERENCES"} onChange={handleChange}>
            {reference.map((list, index) => (
              <option key={index} value={list}>
                {list}
              </option>
            ))}
          </select>
        </div>
        <div className="boxx">
          <span>STYLE</span>
          <select name={"STYLE"} onChange={handleChange}>
            {style.map((list, index) => (
              <option key={index} value={list.name}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
        <div className="boxx lstbox">
          <span>ADDITIONAL MATERIAL</span>

          <input
            type="file"
            name="additional"
            accept=".doc, .docx,.pdf, .image/*"
          />
        </div>

        <div className="boxx ">
          <button className="btn3" type="submit">
            Calculate Price
          </button>

          <div className="price">
            <b>{price} $USD</b>
          </div>
        </div>

        <button className="btn3 btnlst" onClick={handleOrder}>
          Place Order
        </button>
      </form>
    </section>
  );
};

export default Ordernow;
