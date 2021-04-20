import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ServicesData = (props) => {
  const { _id, servicename, price } = props.item;

  const [status, setStatus] = useState(null);

  function deleteProduct() {
    fetch(`https://intense-fortress-10437.herokuapp.com/delete/${_id}`, {
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
      <td>
        <button className="btn btn-danger" onClick={() => deleteProduct(_id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ServicesData;
