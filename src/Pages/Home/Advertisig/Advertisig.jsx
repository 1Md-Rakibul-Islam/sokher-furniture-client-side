import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import BookingModal from "../../Shared/BookingModal/BookingModal";

const Advertisig = () => {
  const [product, setProduct] = useState([]);

  const {
    data: advertisedProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertisedProducts"],
    queryFn: async () => {
      const res = await fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/advertising/products");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handelBooking = (product) => {
    console.log(product);
    setProduct(product);
    // useBooking Hook fetch
    refetch();
  };

  return (
    <div>
      <h2 className="text-3xl text-center text-primary my-20">Tending Products Advertisig</h2>
      <div className="grid justify-items-center gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {advertisedProducts.map((product) => (
          <ProductCard key={product._id} product={product} handelBooking={handelBooking}></ProductCard>
        ))}
        <div>{product && <BookingModal product={product}></BookingModal>}</div>
      </div>
    </div>
  );
};

export default Advertisig;
