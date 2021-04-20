import React, { useEffect, useState } from "react";
import AdminSidebar from "../Sidebar/AdminSidebar";
import ServicesData from "./ServicesData";

const AllServices = () => {
  const [manageServices, setManageServices] = useState([]);

  useEffect(() => {
    fetch("https://intense-fortress-10437.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setManageServices(data);
      });
  }, []);
  return (
    <section className="container-fluid row">
      <div className="col-md-2 col-sm-12">
        <AdminSidebar></AdminSidebar>
      </div>
      <div className="col-md-10 col-sm-12 mt-3 pt-3 d-flex justify-content-center">
        <div className="container-fluid">
          <h3 className="text-primary p-3">All Services</h3>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {manageServices.map((laptop) => (
                  <ServicesData key={laptop._id} item={laptop}></ServicesData>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
