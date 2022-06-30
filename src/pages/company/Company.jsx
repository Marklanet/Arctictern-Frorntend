import React from "react";
import Back2 from "../../components/reusable/back2/Back2";
import Heading from "../../components/reusable/heading/Heading";
import img from "../../images/happy2.png";
import img2 from "../../images/company.png";
import team from "../../images/team.png";
import support from "../../images/vission.png";
import setting from "../../images/mission.png";
import Quicklinks from "../../components/reusable/quicklinks/Quicklinks";
import { Link } from "react-router-dom";

import "./company.css";

const Company = () => {
  return (
    <>
      <section className="company mb ">
        <Back2
          name="Arctictern Writers"
          title="Company - Our Vission and Mission"
          cover={img}
        />
        <div className="flexi c_flex ">
          <div className="left ">
            <Heading
              title="Our Company Story Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <div className="sublinks">
              <button
                className="btn2"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Link to="/contact">Contact Us</Link>
              </button>
              <button
                className="btn2"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Link to="/aboutus">About Us</Link>
              </button>
              <button
                className="btn2"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Link to="/whyus">Why Us</Link>
              </button>
            </div>
          </div>
          <div className="right mt">
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="moreabout mt ">
          <div className="dy">
            <div className="cont c_flex">
              <img src={team} alt="" className="companyimg" />
              <div>
                <h2>Our Definition and Aim</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                  labore aliquam omnis voluptatum laborum, modi quibusdam ullam
                  error at distinctio amet assumenda dolorum repellat illum nam,
                  nesciunt natus vel beatae!
                </p>
              </div>
            </div>
            <div className="cont cont2 c_flex">
              <div>
                <h2>Our Vission</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ratione, optio soluta sed nesciunt pariatur totam tempore
                  perspiciatis quibusdam a expedita cupiditate aliquam adipisci,
                  mollitia animi magnam iste dolores, ullam ipsam?
                </p>
              </div>
              <img src={support} alt="" className="companyimg" />
            </div>
            <div className="cont c_flex">
              <img src={setting} alt="" className="companyimg" />
              <div>
                <h2>Our Mission</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente dignissimos autem vel qui laudantium? Dolore nisi
                  odio sit quo. Culpa dolorem labore tempora ad, excepturi ipsum
                  accusamus quasi et soluta.
                </p>
              </div>
            </div>
          </div>
          <div className="dx">
            <Quicklinks />
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
