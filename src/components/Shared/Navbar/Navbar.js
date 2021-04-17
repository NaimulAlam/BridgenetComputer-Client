import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="home">
          Bridgenet Computer
        </a>
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
              <a className="nav-link px-3" href="home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
