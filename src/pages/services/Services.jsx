import React from "react";
import "./services.css";
import backimg from "../../images/about2.png";
import Back2 from "../../components/reusable/back2/Back2";
import Heading from "../../components/reusable/heading/Heading";
import Servicebox from "./servicesbox/Servicebox";
import { articlelist, academiclist } from "./serviceData";

const Services = () => {
  return (
    <section className="services">
      <Back2
        name="Our Services"
        title="Services - All Services"
        cover={backimg}
      />
      <div className="subservice mb">
        <Heading
          title="Article & Webcontent Services"
          subtitle="article and web based services"
        />
        <div className="backrhr mb">
          <div className="serviceholder mb">
            <Servicebox services={articlelist} />
          </div>
        </div>
        <Heading
          title="Academic Services"
          subtitle="academic and school based services"
        />
        <div className="backrhr mb">
          <div className="serviceholder mb">
            <Servicebox services={academiclist} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
