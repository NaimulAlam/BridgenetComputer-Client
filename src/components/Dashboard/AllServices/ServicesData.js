import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ServicesData = (props) => {

  const { _id, servicename, price } = props.item;

  const [status, setStatus] = useState(null);

  function deleteProduct() {
    fetch(`http://localhost:5000/delete/${_id}`, {
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
      <td>{servicename}</td>
      <td>{price}</td>
      <td className="deleteButton">
        <button onClick={() => deleteProduct(_id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ServicesData;
