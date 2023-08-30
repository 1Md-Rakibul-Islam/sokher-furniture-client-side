import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../Shared/BookingModal/BookingModal";
import Loading from "../Shared/Loading/Loading";
import ProductCard from "../Shared/ProductCard/ProductCard";

const Categories = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState({});

  if (!products.length > 0) {
    return <Loading></Loading>;
  }

  const handelBooking = (product) => {
    setProduct(product);
  };

  return (
    <div className="pt-20 md:mx-10 sm:mx-5 mx-2 min-h-screen">
      <div className="grid justify-items-center gap-5 my-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            handelBooking={handelBooking}
          ></ProductCard>
        ))}
        <div>{product && <BookingModal product={product}></BookingModal>}</div>
      </div>
    </div>
  );
};

export default Categories;
