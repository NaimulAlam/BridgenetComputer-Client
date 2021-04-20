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
    fetch("https://intense-fortress-10437.herokuapp.com/services/" + id)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  const handleCheckout = () => {
    const newBooking = {
      ...loggedInUser,
      newBooking: item,
      orderTime: new Date(),
    };
    fetch("https://intense-fortress-10437.herokuapp.com/addBooking", {
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
      <section className="container-fluid row">
        <div className="col-md-2 col-sm-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 mt-3 pt-3 d-flex justify-content-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-12 container-fluid">
                <div className="container-fluid table-responsive-sm mt-5">
                  <div className="mx-5">
                    <h4 className="mb-3">Checkout</h4>
                    {/* <p>id:{item._id}</p> */}
                    <table className=" table table-striped">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>{item.price}</td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      className="btn btn-primary"
                      onClick={handleCheckout}
                      style={{ position: "absolute", right: "70px" }}
                      type="submit"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 container-fluid my-5 py-5 px-4">
                <h2>Pay Here</h2>
                <StripePayment></StripePayment>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Book;
