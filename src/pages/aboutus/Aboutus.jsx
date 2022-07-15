import React from "react";
import Back2 from "../../components/reusable/back2/Back2";
import Heading from "../../components/reusable/heading/Heading";
import img from "../../images/about.png";
import img2 from "../../images/us2.jpg";
import team from "../../images/team.png";
import support from "../../images/support.png";
import setting from "../../images/setting.png";
import Quicklinks from "../../components/reusable/quicklinks/Quicklinks";

import "./aboutus.css";

const Aboutus = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <section className="about mb ">
        <Back2 name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="flexi c_flex ">
          <div className="left ">
            <Heading
              title="Our Writing Story"
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
            <button
              className="btn2"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              More About Us
            </button>
          </div>
          <div className="right mt">
            <img src={img2} alt="" />
          </div>
        </div>

        <div className={click ? "moreabout mt  " : "nodowns"}>
          <div className="dy">
            <div className="cont c_flex">
              <img src={team} alt="" className="aboutimg" />
              <div>
                <h2>Our Writers</h2>
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
                <h2>24/7 Support for our Clients</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ratione, optio soluta sed nesciunt pariatur totam tempore
                  perspiciatis quibusdam a expedita cupiditate aliquam adipisci,
                  mollitia animi magnam iste dolores, ullam ipsam?
                </p>
              </div>
              <img src={support} alt="" className="aboutimg" />
            </div>
            <div className="cont c_flex">
              <img src={setting} alt="" className="aboutimg" />
              <div>
                <h2>Our Specialization</h2>
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

export default Aboutus;
