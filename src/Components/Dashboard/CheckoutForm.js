import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, price, userName, userEmail } = order;
  const priceData = JSON.stringify({ price: price });

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: priceData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [priceData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      console.log("NOstripe: " + stripe);
      console.log("NOelements: " + elements);
      return;
    }
    
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } 
    else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.dir(JSON.stringify(paymentIntent));
      setSuccess("Congrats! Your payment is completed. TransactionID is: "+paymentIntent.id);
      
      const payment = {
        order: _id,
        transactionId: paymentIntent.id
      }

      fetch(`http://localhost:5000/order/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
      .then(res=> res.json())
      .then(data=> {
        console.log(data);
      })
    }


  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {
          success && <div className="text-green-500">
                 <p>{success}</p> 
                 <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span></p>
          </div>
    }
    </>
  );
};

export default CheckoutForm;
