import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK);
console.log(stripePromise);

// {"_id":"63834e6d60d6368b8e3540b7","productId":"6381297a4568d7fd5159cde4","name":"Workstation Table","photo":"https://i.ibb.co/fpjDyCD/office-furniture-bd-870x493.jpg","buyerName":"Md. Nazrul Islam","buyerEmail":"nazrul@gmail.com","reselPrice":"3800","buyerPhoneNumber":"017128350344","buyerLocation":"Dhaka, Tejgong-120","sellerEmail":"nusrat@gmail.com"}

const Payment = () => {
    const order = useLoaderData()
    const {name, reselPrice} = order;

    return (
        <div>
            <h2 className='text-4xl'>Payment</h2>
            <p className='text-xl mt-5'>Plase pay <strong>${reselPrice}</strong> for your product on {name}</p>

            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;