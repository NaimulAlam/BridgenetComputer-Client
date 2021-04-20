import React from "react";
import aboutCover from "../../../images/aboutCover.jpg";

const AboutUs = () => {
  return (
    <div className="container-fluid my-5" id="about" >
      <div className="row">
        <div className="col-12">
          <h2 className="mb-3" style={{ color: "tomato" }}>
            About Us
          </h2>
          <h3>Explore new ways to see what’s working and fix what’s not.</h3>
        </div>
        <div className="col-12 my-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 my-4">
              <img style={{ height: "60vh", width: "100%" }} src={aboutCover} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 text-left">
              <h4 className="mb-3 text-success">
                We strive to help people by providing extraordinary service and
                expert repairs using only the highest quality parts available.
              </h4>
              <h5 className="mb-3 text-secondary">
                Of course we love fixing cracked iPhone screens and broken
                charge ports, but we get our satisfaction from helping out folks
                who lost their connection to the outside world.
              </h5>
              <h3 className="mb-3 text-primary">What We Do </h3>
              <h5 className="mb-3 text-secondary">
                We service all the newest and popular mobile phones, tablets and
                laptops. natis sed id nisl magna auris et neque sollicitudin
                ullamcorper fusce molestie felis mi id.Vestibulum venenatis sed
                id nisl magna suspendisse a mauris.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
