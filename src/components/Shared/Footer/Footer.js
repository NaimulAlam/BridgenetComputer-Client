import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid mt-5 bg-dark">
        <div className="row">
          <div className="col-md-6 p-5  text-left">
            <h5 className="text-info">
              We strive to help people by providing extraordinary service and
              expert repairs using only the highest quality parts available.
            </h5>
            <div className="text-center text-white mt-5 pt-5">
              <FontAwesomeIcon icon={faFacebook} size="3x" className="mx-2" />
              <FontAwesomeIcon icon={faYoutube} size="3x" className="mx-2" />
              <FontAwesomeIcon icon={faInstagram} size="3x" className="mx-2" />
              <FontAwesomeIcon icon={faTwitter} size="3x" className="mx-2" />
            </div>
          </div>
          <div className="col-md-6 p-5 text-left">
            <h5 className="text-secondary">
              Elegance is global leader in digital evolution working constantly
              for customer satisfaction and growth of your business. Our effort
              is dedicated to the customer growth.
            </h5>
            <h3 className="text-info mt-5 pt-5">
              With love from <a href="#home" className="text-danger text-decoration-none">Bridgenet</a>
            </h3>
          </div>
          <div className="col-12 text-white">
            <small> &copy; 2021 Naimul Alam | All right reserved</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
<p>This is footer</p>;
