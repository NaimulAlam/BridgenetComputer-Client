import {
  faClipboardList,
  faHSquare,
  faPlusSquare,
  faSignOutAlt,
  faTasks,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Admin.css";

const Admin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <section className="container-fluid pt-5 bg-info  sidebarBg">
      <div className="container-fluid p-3">
        <h3 className="text-light">Welcome to Admin Panel</h3>
        <h4 className="text-dark ">{loggedInUser.name}</h4>
      </div>
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

            <li className="m-2">
              <Link to="/login" className="text-white">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span onClick={() => setLoggedInUser({})}>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Admin;
