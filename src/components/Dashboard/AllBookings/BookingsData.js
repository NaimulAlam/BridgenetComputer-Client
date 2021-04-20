import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const BookingsData = (props) => {

    const { _id, name,} = props.bookings;
    const { servicename,} = props.bookings.newBooking;

    const [status, setStatus] = useState(null);
  
    function deleteProduct() {
      fetch(`https://intense-fortress-10437.herokuapp.com/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            setStatus({
              display: "none",
            });
            alert("The Laptop Deleted Successfully");
          } else {
            alert("Delete Failed or Already Deleted");
          }
        });
    }
  
    return (
      <tr style={status}>
        <td>{name}</td>
        <td>{servicename}</td>
        <td>Pending</td>
        <td className="deleteButton">
          <button onClick={() => deleteProduct(_id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    );
};

export default BookingsData;