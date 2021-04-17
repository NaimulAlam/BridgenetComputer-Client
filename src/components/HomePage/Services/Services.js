import React from "react";
import pc from "../../../images/pc.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
  const serviceData = [
    { name: "PC & MAC Computers", description: "lorem10", logo: pc, key: 101 },
    { name: "Laptop Macbook Repair", description: "lorem10", logo: pc, key: 102 },
    { name: "Smartphone Repair", description: "lorem10", logo: pc, key: 103 },
    { name: "iPAD - Tablet Repair", description: "lorem10", logo: pc, key: 104 },
  ];
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h2>Get Your Repair Started</h2>
        <h5 style={{ color: "#1CC7C1" }}>Services We Provide</h5>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service} key={service.key}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
