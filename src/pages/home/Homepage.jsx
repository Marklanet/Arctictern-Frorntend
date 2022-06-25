import React from "react";
import Screen from "./screen/Screen";
import Whyus from "./whyus/Whyus";
import Ourservices from "./ourservices/Ourservices";
import Working from "./working/Working";
import Guarantee from "./guarantee/Guarantee";
import Testimonial from "./testimonials/Testimonial";

const Homepage = () => {
  return (
    <div>
      <Screen />
      <Whyus />
      <Ourservices />
      <Working />
      <Guarantee />
      <Testimonial />
    </div>
  );
};

export default Homepage;
