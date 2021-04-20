import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://intense-fortress-10437.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  
  return (
    <section id="services" className="container-fluid pt-5 bg-light" style={{ minHeight: "100vh" }}>
      <div className="text-center">
        <h2 className="mb-4" style={{ color: "#1CC7C1" }}>Services We Provide</h2>
        <h4>Get Your Repair Started</h4>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 my-5 pt-5 row row-cols-1 row-cols-md-3">
          {services.map((service) => (
            <ServiceDetail service={service} key={service._id}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;