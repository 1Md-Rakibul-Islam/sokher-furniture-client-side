import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Bannder from "../Home/Banner/Banner";
import BookingModal from "../Shared/BookingModal/BookingModal";
import Loading from "../Shared/Loading/Loading";
import ProductCard from "../Shared/ProductCard/ProductCard";

const Products = () => {
  const [product, setProduct] = useState([]);

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://sokher-furniture-1md-rakibul-islam.vercel.app/products"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // const handelBooking = (product) => {
  //     // console.log(product);
  //     setProduct(product);
  //     // useBooking Hook fetch
  //     refetch();
  //   };

  return (
    <div className="md:mx-10 mx-5 min-h-screen">
      <Bannder />
      <h2 className="font-bold text-3xl my-10">Our Products</h2>
      <div className="grid justify-items-center gap-5 my-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            // handelBooking={handelBooking}
          ></ProductCard>
        ))}
        <div>{product && <BookingModal product={product}></BookingModal>}</div>
      </div>
    </div>
  );
};

export default Products;