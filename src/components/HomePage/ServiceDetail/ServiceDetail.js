import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-3 text-center">
      <div className="shadow p-3 mb-5 bg-white rounded">
        <img style={{ height: "70px" }} src={service.logo} alt="" />
        <h5 className="mt-3 mb-3">{service.name}</h5>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          quaerat?
        </p>
      </div>
    </div>
  );
};

export default ServiceDetail;
