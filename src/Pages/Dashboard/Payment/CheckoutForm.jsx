import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ order }) => {
  const [cardError, setCardError] = useState("");
  const [transationId, setTransationId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { reselPrice, email, productId, buyerName, _id } = order;

  //   {"_id":"63834e6d60d6368b8e3540b7","productId":"6381297a4568d7fd5159cde4","name":"Workstation Table","photo":"https://i.ibb.co/fpjDyCD/office-furniture-bd-870x493.jpg","buyerName":"Md. Nazrul Islam","buyerEmail":"nazrul@gmail.com","reselPrice":"3800","buyerPhoneNumber":"017128350344","buyerLocation":"Dhaka, Tejgong-120","sellerEmail":"nusrat@gmail.com"}

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://sokher-furniture-1md-rakibul-islam.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reselPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [reselPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        productId,
        reselPrice,
        transationId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // console.log(data);
            setSuccess("Payment completed");
            setTransationId(paymentIntent.id);
            toast.success("Payment Successfully");
          }
        });
    }
    setProcessing(false);
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
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe && !clientSecret && processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-success">{success}</p>
          <p>
            TransactionId: <span className="font-bold">{transationId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
