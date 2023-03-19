import React from "react";
import { productsAPI } from "../../../API/Products";
import Discount from "../../../Components/Discount";
import ItemsSection from "../../../Components/ItemsSection";
import Advertisig from "../Advertisig/Advertisig";
import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";
import NewArrivals from "../NewArrivals/NewArrivals";
import Support from "../Support/Support";

const Home = () => {
  // {products, isLoading, refetch , itemsCategory}

  const Products = productsAPI();
  console.log(Products);

  return (
    <div className="mx-5 lg:mx-10 ">
      <Banner />
      <CategorySection />
      <Advertisig />
      <NewArrivals />
      {/* <ItemsSection 
        Products={Products}
        // isLoading={productsIsLoading}
        // refetch={refetch}
        itemsCategory="New Arrivals"
      /> */}
      <Discount />
      <Support />
    </div>
  );
};

export default Home;
