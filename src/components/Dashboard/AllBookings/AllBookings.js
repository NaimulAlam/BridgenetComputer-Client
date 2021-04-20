import React, { useEffect, useState } from "react";
import AdminSidebar from "../Sidebar/AdminSidebar";
import BookingsData from "./BookingsData";

const AllBookings = () => {
  const [manageOrders, setManageOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allBookings")
      .then((res) => res.json())
      .then((data) => {
        setManageOrders(data);
      });
  }, []);

  return (
    <section className="container-fluid row">
      <div className="col-md-2 col-sm-12">
        <AdminSidebar></AdminSidebar>
      </div>
      <div className="col-md-10 col-sm-12 mt-3 pt-3 d-flex justify-content-center">
        <div className="container-fluid">
          <h3 className="text-primary p-3">All Bookings</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Service Name</th>
                <th scope="col">status</th>
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
    </section>
  );
};

export default AllBookings;
