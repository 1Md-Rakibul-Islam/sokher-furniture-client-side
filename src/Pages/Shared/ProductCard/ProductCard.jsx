import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaDollarSign, FaMapMarkerAlt, FaRegClock, FaUserClock } from "react-icons/fa";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useBuyer from "../../../Hooks/useBuyer";
import useBooking from "../../../Hooks/useBooking";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useSeller from "../../../Hooks/useSeller";
import { useQuery } from "@tanstack/react-query";

const ProductCard = ({ product, handelBooking }) => {
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
  } = product;

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
    <div className="card max-w-96 glass shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView key={_id} src={photo}>
            <img className="w-full h-80" src={photo} alt="product" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-lg badge-warning">Category: {category}</div>
        </h2>
        <p>{decription.length > 50 ? decription.slice(0, 110) + "....." : decription}</p>
        <div className="flex items-center gap-4">
          <FaRegClock></FaRegClock>
          <span>Publish: {publish}</span>
        </div>
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt></FaMapMarkerAlt>
          <span>Location: {location}</span>
        </div>

        <div className="flex items-center gap-4">
          <FaDollarSign></FaDollarSign>
          <span>Original Price: {originalPrice}</span>
        </div>

        <div className="flex items-center gap-4">
          <FaUserClock></FaUserClock>
          <span>Used: {useDuration}</span>
        </div>

        <div className="badge p-2 badge-secondary">
          <FaDollarSign></FaDollarSign>
          <span>Price: {reselPrice}</span>
        </div>

        <div className="flex gap-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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

        <div className="flex justify-between items-center">
          {
              isBuyer &&
              <>
                  <button onClick={() => handleReport(_id)} className="btn btn-outline btn-error btn-sm">
                    Report
                  </button>
                  <label onClick={() => handelBooking(product)} htmlFor="booking-modal" className={`btn btn-primary text-white ${isBooking && user?.email &&'hidden'}`}>
                    {isBooking ? "Booked" : "Booking"}
                  </label>
              </>
          }

          {isBooking && isBuyer && (
            <button className="btn btn-primary" disabled>
              Booked
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
