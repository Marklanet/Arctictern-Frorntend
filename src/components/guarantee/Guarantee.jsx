import React from "react";
import "./guarantee.css";
import gurantee1 from "../../images/calender.png";
import gurantee2 from "../../images/realtime.png";
import gurantee3 from "../../images/original.png";
import gurantee4 from "../../images/discount.png";
import gurantee5 from "../../images/confidential.png";
import gurantee6 from "../../images/assurance.png";

export default function Guarantee() {
  return (
    <div className="guarantee">
      <h1>OUR GUARANTEE</h1>
      <div className="first">
        <div className="leftt">
          <img src={gurantee1} alt="" />
          <div>
            <h2>Timely Delivery</h2>
            <p>
              Help For Assessment contemplates the significance of time factor
              to our clients and, in this manner, abides by precise deadline our
              clients set. At the same time, we keep you posted on the progress
              of your assessment, thesis, dissertation, or any other assessment
              you have ordered.
            </p>
          </div>
        </div>
        <div className="rightt">
          <img src={gurantee2} alt="" />
          <div>
            <h2>Real-Time Communication</h2>
            <p>
              We allow our clients to interact in real-time with our expert
              writers about the prerequisites of their assessment, essays, and
              dissertation. Our clients are also allowed to request a draft of
              their assessment, thesis, dissertation, or any other paper as it
              is worked on.
            </p>
          </div>
        </div>
      </div>
      <div className="first">
        <div className="leftt">
          <img src={gurantee3} alt="" />
          <div>
            <h2>0% Plagiarism</h2>
            <p>
              Our company uses plagiarism checkers such as Turnitin, Copyscape,
              and Plagscan. We also scrutinize your order for grammar issues
              through Grammarly to facilitate the production of 100% original
              and grammatically correct work.
            </p>
          </div>
        </div>
        <div className="rightt">
          <img src={gurantee4} alt="" />
          <div>
            <h2>Special Discounts</h2>
            <p>
              We understand that students are on tight budgets, and thus we
              allow them to negotiate to their convenient price. We also give up
              to 50% discount on your first order. Check regularly for upcoming
              discounts.
            </p>
          </div>
        </div>
      </div>
      <div className="first">
        <div className="leftt">
          <img src={gurantee5} alt="" />
          <div>
            <h2>Confidentiality Assurance</h2>
            <p>
              We ascertain that our client's information will NEVER be
              communicated with our writers or any other third party. In the
              place of personal details, our company uses order numbers for
              communication.
            </p>
          </div>
        </div>
        <div className="rightt">
          <img src={gurantee6} alt="" />
          <div>
            <h2>100% Contentment Assurance</h2>
            <p>
              We follow the papers and the client's instructions to the latter.
              Although contentment assurance is relative depending on the client
              providing complete and comprehensive instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
