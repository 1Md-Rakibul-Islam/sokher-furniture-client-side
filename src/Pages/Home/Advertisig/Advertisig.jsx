import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import BookingModal from "../../Shared/BookingModal/BookingModal";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../../../Components/SectionHeader";

const Advertisig = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate('/dashboard/buyer/myOrders');

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
    // console.log(product);
    setProduct(product);
    // useBooking Hook fetch
    // refetch();
    
  };

  return (
    <div className="md:mx-10 sm:mx-5 mx-2">
      <h2 className="text-left font-bold text-2xl my-10">Letest Items</h2>
      {/* <SectionHeader>Tending Products</SectionHeader> */}
      <div className="grid justify-items-center gap-5 my-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {advertisedProducts.map((product) => (
          <ProductCard key={product._id} product={product} handelBooking={handelBooking}></ProductCard>
        ))}
        <div>{product && <BookingModal product={product}></BookingModal>}</div>
      </div>
    </div>
  );
};

export default Advertisig;
