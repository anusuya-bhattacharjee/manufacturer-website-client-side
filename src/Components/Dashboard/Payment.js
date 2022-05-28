import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
    "pk_test_51L3lukSAdlOZrLrvkdBR4Q4phaAoPuP6wC8qJsZ1pcifPPjMRsz2hYAQ4uPnehB3Et2gQoVPu35wV5FkPcc8YqRw00OtmhTWPx"
    );

const Payment = () => {
  const { id } = useParams();
  const [Order, setOrder] = useState({});

  const url = `http://localhost:5000/order/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [url]);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {Order.userName}</p>
          <h2 className="card-title justify-center">Pay for {Order.name}</h2>
          <p>
            Please Pay <span className="font-bold">${Order.price}</span>
          </p>
        </div>
      </div>
      
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            {Order.price && <CheckoutForm order={Order}></CheckoutForm>}
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
