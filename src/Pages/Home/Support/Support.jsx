import React from 'react';
import { FaAmazonPay, FaPhone, FaRetweet, FaShippingFast } from 'react-icons/fa';

const Support = () => {
    return (
        <div>
            <h1 className="text-4xl text-center text-primary mt-3">Our Services</h1>
            <div className="grid gap-6 my-20 md:mx-10 mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="card bordered shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaShippingFast className='text-primary text-7xl'></FaShippingFast>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-secondary">Free Shipping</h2>
                        <p>We will provide free shipping</p>
                    </div>
                </div>
                <div className="card bordered shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaAmazonPay className='text-primary text-7xl'></FaAmazonPay>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-secondary">AmazonPay</h2>
                        <p>Pay with Multiple Credit Cards</p>
                    </div>
                </div>
                <div className="card bordered shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaRetweet className='text-primary text-7xl'></FaRetweet>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-secondary">7 Day Returns</h2>
                        <p>14 days for an exchange</p>
                    </div>
                </div>
                <div className="card bordered shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaPhone className='text-primary text-7xl'></FaPhone>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-secondary">Online Support</h2>
                        <p>24 hours a day 7 days a week</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;