import React, { useEffect, useState } from "react";
import AdminSidebar from "../Sidebar/AdminSidebar";
import BookingsData from "./BookingsData";

const AllBookings = () => {
  const [manageOrders, setManageOrders] = useState([]);

  useEffect(() => {
    fetch("https://intense-fortress-10437.herokuapp.com/allBookings")
      .then((res) => res.json())
      .then((data) => {
        setManageOrders(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <AdminSidebar></AdminSidebar>
        </div>
        <div
          className="col-md-10 col-sm-12 mt-3 pt-3 d-flex justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="container-fluid">
            <h3 className="text-primary p-3">All Bookings</h3>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Service</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    <th scope="col">Button</th>
                  </tr>
                </thead>
                <tbody>
                  {manageOrders.map((bookings) => (
                    <BookingsData
                      key={bookings._id}
                      bookings={bookings}
                    ></BookingsData>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookings;
