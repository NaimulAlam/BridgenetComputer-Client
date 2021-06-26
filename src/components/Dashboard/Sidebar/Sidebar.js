import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faHSquare,
  faTasks,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
import Swal from "sweetalert2";

const Sidebar = () => {
  const [setLoggedInUser] = useContext(UserContext);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);

    Swal.fire({
      title: "Logout",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((res)=>{
      if(res.isConfirmed){
        sessionStorage.setItem("token", "");
        setLoggedInUser("");
        Swal.fire("Logged Out!", "Successfully Logged Out", "success");
      }
    })
  }

  return (
    <section className="container-fluid bg-info pt-5 sidebarBg">
      <div className="row">
        <div className="col-sm-12">
          <ul className="list-unstyled mt-3">
            <li>
              <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faHSquare} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/bookings" className="text-white">
                <FontAwesomeIcon icon={faPlusSquare} />
                <span>Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/addReview" className="text-white">
                <FontAwesomeIcon icon={faTasks} />
                <span>Add Review</span>
              </Link>
            </li>
            <li className="mt-md-5 pt-md-5">
              <Link to="/login" className="text-white">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span onClick={handleClick}>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
