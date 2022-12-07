import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import StripePayment from "../StripePayment/StripePayment";
import "./Book.css";

const Book = () => {
  const [loggedInUser] = useContext(UserContext);

  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch("https://bridgenet-server-api.onrender.com/services/" + id)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  const [bookingData, setBookingData] = useState(null);
  const onSubmit = (data) => {
    setBookingData(data);
  };
  const handlePaymentSuccess = (paymentId, paymentMethod) => {
    const newBooking = {
      ...loggedInUser,
      newBooking: item,
      orderTime: new Date(),
      paymentId,
      paymentMethod,
      status: "pending",
    };
    fetch("https://bridgenet-server-api.onrender.com/addBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your Order Placed Successfully");
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 mt-3 pt-3 d-flex justify-content-center bookDiv">
          <div className="container-fluid">
            <div className="row">
              <div
                style={{ display: bookingData ? "none" : "block" }}
                className="col container-fluid"
              >
                <div className="container-fluid table-responsive-sm mt-5">
                  <div className="mx-5">
                    <h4 className="mb-3">Checkout</h4>
                    <table className=" table table-striped">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{item.servicename}</td>
                          <td>${item.price}</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>${item.price}</td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      className="btn btn-primary"
                      onClick={onSubmit}
                      style={{ position: "absolute", right: "70px" }}
                      type="submit"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
              <div
                style={{ display: bookingData ? "block" : "none" }}
                className="col p-5 m-5 text-center rounded bg-light "
              >
                <h5 className="m-4">Give the Card Info to Pay </h5>
                <StripePayment handlePayment={handlePaymentSuccess}>
                  {" "}
                </StripePayment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
