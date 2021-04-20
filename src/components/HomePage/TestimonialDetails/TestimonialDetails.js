import React from "react";
import img from "../../../images/pc.png";

const TestimonialDetails = ( props ) => {
  
  const {  name, title, review, imgUrl } = props.details;
  return (
    <div className="col mb-4">
      <div className="card h-100">
        <img
          style={{ width: "80px" }}
          src={imgUrl}
          className="card-img-top rounded mx-auto d-block"
          alt="reviewer"
        />
        <div className="card-body">
          <h5 className="card-title ">{name}</h5>
          <p className="card-text text-primary">{title}</p>
          <p className="card-text">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
