import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faHSquare,
  faUserPlus,
  faTasks,
  faClipboardList,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
import Swal from "sweetalert2";

const AdminSidebar = () => {
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
    }).then((res) => {
      if (res.isConfirmed) {
        sessionStorage.setItem("token", "");
        setLoggedInUser("");
        Swal.fire("Logged Out!", "Successfully Logged Out", "success");
      }
    });
  };

  return (
    <section className="container-fluid pt-5 bg-info sidebarBg">
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
              <Link to="/allServices" className="text-white">
                <FontAwesomeIcon icon={faTasks} />
                <span>All Services</span>
              </Link>
            </li>
            <li>
              <Link to="/allBookings" className="text-white">
                <FontAwesomeIcon icon={faClipboardList} />
                <span>All Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/addAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Add Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/addService" className="text-white">
                <FontAwesomeIcon icon={faPlusSquare} />
                <span>Add Services</span>
              </Link>
            </li>

            <li className="mt-md-5 pt-md-5">
              <Link to="/home" className="text-white">
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

export default AdminSidebar;
