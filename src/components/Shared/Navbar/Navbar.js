import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://intense-fortress-10437.herokuapp.com/isAdmin", {
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
              <Link to="/" className="text-white nav-link px-3">
                <span> Home </span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="text-white nav-link px-3" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="text-white nav-link px-3" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="text-white nav-link px-3">
                <span>Dashboard</span>
              </Link>
            </li>
            {isAdmin && (
              <li className="nav-item">
                <Link to="/admin" className="text-white nav-link px-3">
                  <span>Admin</span>
                </Link>
              </li>
            )}
            <li className="nav-item">
              <a className="text-white nav-link px-3" href="#testimonial">
                Testimonials
              </a>
            </li>
            <li>
              {!loggedInUser.email ? (
                <Link
                  className="linkStyle text-white nav-link px-3"
                  to="/login"
                >
                  Login
                </Link>
              ) : (
                <Link onClick={() => setLoggedInUser({})} to="/">
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
