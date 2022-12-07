import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const BookingsData = (props) => {
  const { _id, name, status } = props.bookings;
  const { servicename } = props.bookings.newBooking;

  const [statusUpdate, setStatusUpdate] = useState({});

  const handleStatusChange = (e) => {
    const newStatusUpdate = { ...statusUpdate };
    newStatusUpdate[e.target.name] = e.target.value;
    setStatusUpdate(newStatusUpdate);
  };

  const updateStatus = (id) => {
    fetch(`https://bridgenet-server-api.onrender.com/updateBooking/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(statusUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Updated");
      });
  };

  return (
    <tr>
      <td className="text-primary">{name}</td>
      <td>{servicename}</td>
      <td className="text-warning">{status}</td>
      <td>
        <select
          className="rounded-pill p-1 border-info"
          name="status"
          onChange={handleStatusChange}
        >
          <option className="text-danger" >{status}</option>
          <option className="text-danger" >pending</option>
          <option className="text-warning">On Going</option>
          <option className="text-success">Done</option>
        </select>
      </td>

      <td>
        <button className="btn btn-primary" onClick={() => updateStatus(_id)}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </td>
    </tr>
  );
};

export default BookingsData;
