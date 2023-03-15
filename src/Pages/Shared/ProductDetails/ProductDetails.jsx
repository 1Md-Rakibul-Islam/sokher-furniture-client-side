import React, { useContext } from 'react';
import { FaCheckCircle, FaDollarSign, FaMapMarkerAlt, FaRegClock, FaUserClock } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useBuyer from '../../../Hooks/useBuyer';
import useBooking from '../../../Hooks/useBooking';
import Loading from '../Loading/Loading';

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
    
      // console.log(product);
    
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
                                <h2 className="md:text-3xl text-2xl mb-5 font-bold tracking-tight sm:text-3xl ">{name}</h2>
                                <div className="badge badge-lg badge-warning">Category: {category}</div>
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

                                    <div className="badge badge-md p-2 md:mt-5 mt-2 badge-secondary">
                                    <FaDollarSign></FaDollarSign>
                                    <span>Price: {reselPrice}</span>
                                    </div>

                                </div>
                            </div>
                            <div className="">
                                    <div className="flex justify-between items-center">
                                    {
                                        isBuyer &&
                                        <>
                                            <button onClick={() => handleReport(_id)} className="btn btn-outline btn-error btn-sm">
                                                Report
                                            </button>
                                            <label onClick={() => handelBooking(product)} htmlFor="booking-modal" className={`btn btn-primary text-white ${isBooking && user?.email &&'hidden'}`}>
                                                {"Booking"}
                                            </label>
                                        </>
                                    }

                                    {isBuyer && (
                                        <button className="btn btn-primary" disabled>
                                        Booked
                                        </button>
                                    )}

                                    </div>
                                </div>
                                {/* <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-sky-400 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 ">Cibo augue offendit has ad</h4>
                                        <p className="mt-2 ">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
                                    </div>
                                </div> */}
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            {/* <img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" /> */}
                            <figure>
                              <PhotoProvider>
                                <PhotoView key={_id} src={photo}>
                                  <img className=" mx-auto rounded-lg shadow-lg bg-gray-500" src={photo} alt="product" />
                                </PhotoView>
                              </PhotoProvider>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-2xl mt-5 p-5'>
                    <h2 className="md:text-3xl text-lg mb-5 font-semibold tracking-tight sm:text-3xl ">Product details of "{name}"</h2>
                    <p>{decription}</p>
                </div>
            </div>
        </section>
    // <section className="card max-w-5xl mx-auto glass shadow-xl">
    //   <figure>
    //     <PhotoProvider>
    //       <PhotoView key={_id} src={photo}>
    //         <img className="w-full h-80" src={photo} alt="product" />
    //       </PhotoView>
    //     </PhotoProvider>
    //   </figure>
    );
};

export default ProductDetails;