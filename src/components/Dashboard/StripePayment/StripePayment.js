import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51Ihi90H7ATVklR8skL79sA3ojBY41lnUAZyfOgVbi8pGD8b69KIDUny2igSljMu7ScfOl0LyEIz3YCg4kGywfo1x009F4n7tqo"
);

const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm></PaymentForm>
    </Elements>
  );
};

export default StripePayment;
