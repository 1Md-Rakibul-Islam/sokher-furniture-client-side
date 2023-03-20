import React from 'react';

const FetureBanner = () => {
    return (
        <section>
            <div className="bg-slate-400">
                <div className="container flex flex-col items-center px-4 py-10 pb-16 mx-auto text-center lg:pb-40 md:py-28 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl xl:max-w-2xl text-gray-900">Find Your dream Furneture</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Shokher Furnuter is Online Ecommerce platfrom for old furniture buy and selling. You can buy our letest collection.</p>
                </div>
            </div>
            <img src="https://i.ibb.co/FB8QGTx/8032800.jpg" alt="" className="w-3/4 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
        </section>
    );
};

export default FetureBanner;