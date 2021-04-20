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
    fetch(`https://intense-fortress-10437.herokuapp.com/updateBooking/${id}`, {
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
      <td>{name}</td>
      <td>{servicename}</td>
      <td>{status}</td>
      <td>
        <select
          className="rounded-pill p-1 border-warning"
          name="status"
          onChange={handleStatusChange}
        >
          <option>{status}</option>
          <option>Approved</option>
          <option>On Going</option>
          <option>Done</option>
          <option>Canceled</option>
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
