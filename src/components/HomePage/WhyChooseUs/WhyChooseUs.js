import React from "react";
import affordable from "../../../images/affordable.png";
import repair from "../../../images/repair.png";
import gear from "../../../images/gear.png";
import time from "../../../images/full-time.png";
import WhyChooseUsInfo from "../WhyChooseUsInfo/WhyChooseUsInfo";

const WhyChooseUsData = [
  {
    name: "Free Diagnostics",
    description: "lorem10",
    logo: repair,
    key: 101,
  },
  {
    name: "Low Price Guarantee",
    description: "lorem10",
    logo: affordable,
    key: 102,
  },
  {
    name: "Quick Repair Process",
    description: "lorem10",
    logo: gear,
    key: 103,
  },
  {
    name: "90-Day Warranty",
    description: "lorem10",
    logo: time,
    key: 104,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="services" className="container-fluid mt-5 bg-light">
      <div className="text-center">
        <h2 className="mb-3" style={{ color: "#1CC7C1" }}>
          Why Choose Us
        </h2>
        <h3>Everybody has standards ours are just better. </h3>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row mt-5 pt-5">
          {WhyChooseUsData.map((info) => (
            <WhyChooseUsInfo info={info} key={info.key}></WhyChooseUsInfo>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
