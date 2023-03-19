import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import ProductCard from "../../../Shared/ProductCard/ProductCard";
import BookingModal from "../../../Shared/BookingModal/BookingModal";


const JustForYou = () => {
  const [product, setProduct] = useState([]);

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/products");
      const data = await res.json();
      return data?.reverse()?.slice(0, data?.length - 7)
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handelBooking = (product) => {
    // console.log(product);
    setProduct(product);
    // useBooking Hook fetch
    // refetch();
    
  };

  return (
    <div className="md:mx-10 sm:mx-5 mx-2">
      <h2 className="text-left font-bold text-primary text-2xl my-10">New Arrivales</h2>
      {/* <SectionHeader>Tending Products</SectionHeader> */}
      <div className="grid justify-items-center gap-5 my-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} handelBooking={handelBooking}></ProductCard>
        ))}
        <div>{product && <BookingModal product={product}></BookingModal>}</div>
      </div>
    </div>
  );
};

export default JustForYou;