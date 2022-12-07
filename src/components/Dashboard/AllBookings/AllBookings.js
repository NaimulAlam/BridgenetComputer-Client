import React, { useEffect, useState } from "react";
import AdminSidebar from "../Sidebar/AdminSidebar";
import BookingsData from "./BookingsData";

const AllBookings = () => {
  const [manageBooking, setManageBooking] = useState([]);

  useEffect(() => {
    fetch("https://bridgenet-server-api.onrender.com/allBookings")
      .then((res) => res.json())
      .then((data) => {
        setManageBooking(data);
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
                    <th className="text-primary" scope="col">Customer Name</th>
                    <th scope="col">Service</th>
                    <th className="text-warning" scope="col">Status</th>
                    <th scope="col">Update</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {manageBooking.map((bookings) => (
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
