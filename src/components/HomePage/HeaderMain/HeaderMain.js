import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import "./HeaderMain.css";
import coverImg from "../../../images/Repair1.jpg";

const HeaderMain = () => {
  return (
    <div className="header-main pb-5">
      <Navbar></Navbar>
      <div className="row p-5" style={{marginRight:"0px"}}>
        <div className="col-sm-12 col-md-6 text-left">
          <h1>
            <span>Professional</span> <br />
            Computer <br/> Repair <br/> Services
          </h1>
        </div>
        <div className="col-sm-12 col-md-6 text-left">
          <h4>
            --- Your one stop place for all kinds of
            computer repair and diagnostics
          </h4>
          <div className="pt-5 text-center">
            <img className="coverImage" src={coverImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
