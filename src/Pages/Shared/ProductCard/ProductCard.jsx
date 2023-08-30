import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaDollarSign,
  FaMapMarkerAlt,
  FaRegClock,
  FaUserClock,
} from "react-icons/fa";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useBuyer from "../../../Hooks/useBuyer";
import useBooking from "../../../Hooks/useBooking";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const ProductCard = ({ product }) => {
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

    fetch(
      "https://sokher-furniture-1md-rakibul-islam.vercel.app/product/report",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(reportedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    // console.log(reportedProduct);
  };

  return (
    <div className="w-full bg-white hover:shadow-lg">
      <div>
        <figure className="flex justify-center items-center">
          <PhotoProvider>
            <PhotoView key={_id} src={photo}>
              <img
                className="object-cover object-center w-full h-44 bg-gray-500"
                src={photo}
                alt="product"
              />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <Link to={`/${_id}`}>
          <div className="p-4 flex flex-col justify-end">
            <h2 className="text-md text-black font-semibold">{name}</h2>
            <div className="">
              <div className="badge badge-sm badge-warning">
                <FaDollarSign></FaDollarSign>
                <span>{reselPrice}</span>
              </div>
              <div className="flex items-baseline gap-2 text-sm">
                <FaMapMarkerAlt></FaMapMarkerAlt>
                <span>{location}</span>
              </div>
              <div className="flex flex-wrap justify-between mt-2 items-baseline gap-2 text-sm">
                <div className="flex items-baseline gap-2 text-sm">
                  <FaUserClock></FaUserClock>
                  <span>{useDuration}</span>
                </div>
                <button className="btn btn-xs btn-outline rounded-full btn-primary">
                  Details <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
