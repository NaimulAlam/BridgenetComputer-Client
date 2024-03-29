import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Swal from "sweetalert2";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://bridgenet-server-api.onrender.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          Bridgenet Computer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className=" nav-link px-3">
                <span> Home </span>
              </Link>
            </li>
            <li className="nav-item">
              <a className=" nav-link px-3" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className=" nav-link px-3" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className=" nav-link px-3">
                <span>Dashboard</span>
              </Link>
            </li>
            {isAdmin && (
              <li className="nav-item">
                <Link to="/admin" className="text-danger nav-link px-3">
                  <span>Admin</span>
                </Link>
              </li>
            )}
            <li className="nav-item">
              <a className=" nav-link px-3" href="#testimonial">
                Testimonials
              </a>
            </li>
            <li>
              {!loggedInUser.email ? (
                <Link
                  className="linkStyle  nav-link px-3"
                  to="/login"
                >
                  Login
                </Link>
              ) : (
                <Link onClick={handleClick} to="/">
                  <div className="logoContainer px-3">
                    <img
                      src={loggedInUser.photo}
                      className="logo"
                      alt="UserPhoto"
                    />
                    <div className="overlay">
                      <p className="icon" title="User Profile">
                        Logout
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
