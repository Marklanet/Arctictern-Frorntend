import React from "react";
import "./pricing.css";
import img from "../../images/about.png";
import Heading from "../../components/reusable/heading/Heading";
import Back2 from "../../components/reusable/back2/Back2";
import img2 from "../../images/one.jpg";

const Pricing = () => {
  return (
    <section className="pricing">
      <Back2
        name="Our Pricing"
        title="We offer - Fair price to our clients"
        cover={img}
      />
      <div className="container">
        <div className="c_flex">
          <div className="left mt">
            <img src={img2} alt="" />
          </div>
          <div className="right ">
            <h1>Special Offer</h1>
            <h3>Get up to 30% discount on first order</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="pricediv container mb">
          <Heading title="Price Table" subtitle=" " />
          <div className="tablehold">
            <table>
              <tr>
                <th>Pages</th>
                <th>High School</th>
                <th>Undergraduate </th>
                <th>Masters</th>
                <th>IB Level</th>
                <th>Doctoral</th>
              </tr>
              <tr>
                <td>1-5</td>
                <td>2 USD</td>
                <td>3 USD</td>
                <td>4 USD</td>
                <td>5 USD</td>
                <td>6 USD</td>
              </tr>
              <tr>
                <td>5-10</td>
                <td>2 USD</td>
                <td>3 USD</td>
                <td>4 USD</td>
                <td>5 USD</td>
                <td>6 USD</td>
              </tr>
              <tr>
                <td>10-15</td>
                <td>2 USD</td>
                <td>3 USD</td>
                <td>4 USD</td>
                <td>5 USD</td>
                <td>6 USD</td>
              </tr>
              <tr>
                <td>15-20</td>
                <td>2 USD</td>
                <td>3 USD</td>
                <td>4 USD</td>
                <td>5 USD</td>
                <td>6 USD</td>
              </tr>
              <tr>
                <td>20-50</td>
                <td>2 USD</td>
                <td>3 USD</td>
                <td>4 USD</td>
                <td>5 USD</td>
                <td>6 USD</td>
              </tr>
              <tr>
                <td>50-100</td>
                <td>2 USD</td>
                <td>3 USD</td>
                <td>4 USD</td>
                <td>5 USD</td>
                <td>6 USD</td>
              </tr>
              <tr>
                <td>100-200</td>
                <td>2 USD</td>
                <td>3 USD</td>
                <td>4 USD</td>
                <td>5 USD</td>
                <td>6 USD</td>
              </tr>
              <tr>
                <td>Over 200</td>
                <td>2 USD</td>
                <td>3 USD</td>
                <td>4 USD</td>
                <td>5 USD</td>
                <td>6 USD</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
