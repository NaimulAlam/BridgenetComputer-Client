import React from "react";
import { useHistory } from "react-router";
import "./ServiceDetail.css";

const ServiceDetail = (props) => {

  const { _id, servicename, description, price, imgUrl } = props.service;

  const history = useHistory();

  const handleClick = () => {
    const url = `/serviceBooking/${_id}`;
    history.push(url);
  };

  return (
    <div className="col mb-4 ">
      <div className="card h-100 zoom">
        <img className="CardImg card-img-top rounded mx-auto d-block" src={imgUrl} alt="" />
        <div className="card-body">
          <h5 className="card-title text-danger">{servicename}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <p>Starting from ${price}</p>
          <p onClick={() => handleClick(_id)} className="btn btn-primary">
            Book Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
