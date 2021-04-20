import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = ({handlePayment}) => {
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentError, setPaymentError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod)
      handlePayment(paymentMethod.id,paymentMethod.type);
      setPaymentError(null)
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button className="btn btn-warning" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
          paymentError && <p className="text-danger">{paymentError}</p>
      }
      {
          paymentSuccess && <p className="text-success p-3">"Thank you! Your Payment Successfully Done. "</p>
      }
    </div>
  );
};

export default PaymentForm;
