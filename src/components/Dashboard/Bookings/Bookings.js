import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [loggedInUser] = useContext(UserContext);
  const [userOrders, setUserOrders] = useState([]);

  //   const [totalPrice setTotalPrice] = useState()
  let total = 0;
  for (let i = 0; i < userOrders.length; i++) {
    const product = userOrders[i];
    total = total + parseInt(product.newBooking.price);
  }

  useEffect(() => {
    fetch(
      "https://intense-fortress-10437.herokuapp.com/bookings?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setUserOrders(data);
      });
  }, [loggedInUser]);

  return (
    <section className="container-fluid row">
      <div className="col-md-2 col-sm-12">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 col-sm-12 mt-3 pt-3 d-flex justify-content-center">
        <div className="container">
          <h3 className="text-primary p-3">Bookings Summery</h3>
          <div className="container-fluid">
            <h4> Welcome! {loggedInUser.name} to your Bookings Summery</h4>
            <h4>
              You Have{" "}
              <span className="text-danger"> {userOrders.length} </span>{" "}
              Bookings
            </h4>
            <p>
              Please ensure this is you email:{" "}
              <span className="text-warning">{loggedInUser.email}</span> to
              receive your order confirmation
            </p>
          </div>
          {userOrders.length > 0 ? (
            <div className="table-responsive my-5">
              <table className="table table-hover">
                <thead>
                  <tr style={{ backgroundColor: "#03fcf8" }}>
                    <th scope="col">Service Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {userOrders &&
                    userOrders.map((order) => (
                      <tr key={order._id}>
                        <td>{order.newBooking.servicename}</td>
                        <td>
                          {new Date(order.orderTime).toDateString("dd/MM/yyyy")}
                        </td>
                        <td>${order.newBooking.price}</td>
                        <td>Pending</td>
                      </tr>
                    ))}
                  <tr>
                    <td></td>
                    <td>Total Amount</td>
                    <td>${total}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="container-fluid my-5">
              <h2>
                You did not made any orders yet. please make some order first
              </h2>
              <Link to="/">
                <button className="btn btn-primary my-3">
                  Choose a Service
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Bookings;
