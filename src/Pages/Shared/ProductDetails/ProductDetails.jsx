import React, { useContext, useState } from 'react';
import { FaCheckCircle, FaDollarSign, FaMapMarkerAlt, FaRegClock, FaUserClock } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useBuyer from '../../../Hooks/useBuyer';
import useBooking from '../../../Hooks/useBooking';
import Loading from '../Loading/Loading';
import { Carousel } from 'react-responsive-carousel';
import BookingModal from '../BookingModal/BookingModal';

const ProductDetails = () => {

    const {
        _id,
        category,
        name,
        photo,
        verified,
        location,
        originalPrice,
        reselPrice,
        useDuration,
        decription,
        sellerName,
        sellerEmail,
        sellerPhoto,
        publish,
      } = useLoaderData();

       const product = { _id, name, photo, reselPrice, sellerEmail }
    
      const { user } = useContext(AuthContext);
      const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
      const [isBooking, isBookingLoading] = useBooking(_id);
    
      if (isBuyerLoading && isBookingLoading) {
        return <Loading></Loading>;
      }
    
      const handleReport = (_id) => {
        window.confirm("Are you sure report the product? Yes?No");
    
        const reportedProduct = {
          reportedProductId: _id,
          name,
          photo,
          reselPrice,
          useDuration,
          sellerName,
          sellerEmail,
          repoterEmail: user.email,
          repoterName: user.displayName,
        };
    
        fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/product/report", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            // authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(reportedProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        // console.log(reportedProduct);
      };


    return (
        <section className="bg-slate-100">
            <div className="container md:pt-32 pt-20 max-w-xl mx-auto lg:px-8 lg:max-w-7xl">
                <div className='bg-white md:p-10 sm:p-5'>
                    <div className="grid lg:gap-8 lg:grid-cols-2 ">
                        <div className="lg:col-start-2 flex flex-col justify-between">
                            <div>
                                <h2 className="md:text-3xl text-2xl mb-2 font-bold tracking-tight sm:text-3xl ">{name}</h2>
                                <p className="mb-5">Category: {category}</p>
                                <div className='mt-10'>
                                    <div className="flex md:mt-5 mt-2 items-baseline gap-2 md:text-lg text-sm">
                                        <FaRegClock></FaRegClock>
                                        <span>Publish: {publish}</span>
                                    </div>
                                    <div className="flex md:mt-5 mt-2 items-baseline gap-2 md:text-lg text-sm">
                                        <FaMapMarkerAlt></FaMapMarkerAlt>
                                        <span>Location: {location}</span>
                                    </div>
                                    <div className="flex md:mt-5 mt-2 items-baseline gap-2 md:text-lg text-sm">
                                        <FaDollarSign></FaDollarSign>
                                        <span>Original Price: {originalPrice}</span>
                                    </div>

                                    <div className="flex md:mt-5 mt-2 items-baseline gap-2 md:text-lg text-sm">
                                        <FaUserClock></FaUserClock>
                                        <span>Used: {useDuration}</span>
                                    </div>
                                    <div className="badge badge-lg badge-warning flex md:mt-5 mt-2 gap-2 md:text-lg text-sm">
                                        <FaDollarSign></FaDollarSign>
                                        <span>Price: {reselPrice}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 my-3">
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={sellerPhoto} alt="" />
                                    </div>
                                    {
                                    verified && <FaCheckCircle className="text-xl text-blue-400"></FaCheckCircle>
                                    }
                                </div>
                                <div className="flex flex-col my-2">
                                    <h2 className="text-3px font-bold">Seller: {sellerName ? sellerName : "Not Found"}</h2>
                                    <p className="text-primary m-0">Email: {sellerEmail}</p>
                                </div>
                            </div>
                            <div className="">
                                    <div className="flex justify-between items-center">
                                    {
                                        isBuyer && user?.email &&
                                        <>
                                            <button onClick={() => handleReport(_id)} className={`btn btn-outline btn-error btn-sm `}>
                                            {/* <button onClick={() => handleReport(_id)} className={`btn btn-outline btn-error btn-sm ${user?.email && 'hidden'}`}> */}
                                                Report
                                            </button>
                                            <label htmlFor="booking-modal" className={`btn btn-primary text-white `}>
                                                Order Now
                                            </label>
                                        </>
                                    }
                                    </div>
                                    <div>{product && <BookingModal product={product}></BookingModal>}</div>
                                </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 mx-auto ">
                            <img src={photo} alt="" className="w-full rounded-2xl shadow-lg bg-gray-500" />
                            {/* <Carousel 
                                autoPlay={true}
                                infiniteLoop={true}
                                dynamicHeight={true}
                                interval={2000}
                                // selectedItem={selectImg}
                            >
                                {
                                images?.map( img => <div className="w-auto h-auto">
                                    <PhotoProvider>
                                        <PhotoView key={_id} src={photo}>
                                        <img className=" mx-auto rounded-lg shadow-lg bg-gray-500" src={photo} alt="product" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </div>)
                                }
                            </Carousel> */}
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-2xl mt-5 p-5'>
                    <h2 className="md:text-3xl text-lg mb-5 font-semibold tracking-tight sm:text-3xl ">Product details of "{name}"</h2>
                    <p>{decription}</p>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;