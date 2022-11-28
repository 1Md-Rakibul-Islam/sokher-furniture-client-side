import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData()
    const {appoitment, patientName, email, phone, price, slot, treatment} = booking;
    console.log(booking); 
    return (
        <div>
            <h2 className='text-4xl'>Payment for</h2>
            <p className='text-xl mt-5'>Plase pay <strong>${price}</strong> for your appointment on {appoitment} {slot}</p>

            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;