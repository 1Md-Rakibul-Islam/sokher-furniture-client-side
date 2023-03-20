import React from "react";
import { productsAPI } from "../../../API/Products";
import Discount from "../../../Components/Discount";
import ItemsSection from "../../../Components/ItemsSection";
import Advertisig from "../Advertisig/Advertisig";
import Banner from "../Banner/Banner";
import CategoryCardSection from "../CategoryCardSection/CategoryCardSection";
import CategorySection from "../CategorySection/CategorySection";
import Gallery from "../Gallery/Gallery";
import NewArrivals from "../NewArrivals/NewArrivals";
import Support from "../Support/Support";
import ContactUs from "./ContactUs/ContactUs";
import FetureBanner from "./FetureBanner/FetureBanner";
import JustForYou from "./JustForYou/JustForYou";

const Home = () => {
  // {products, isLoading, refetch , itemsCategory}

  const Products = productsAPI();
  console.log(Products);

  return (
    <div className=" lg:mx-10 ">
      <Banner />
      <CategorySection />
      <FetureBanner />
      <Advertisig />
      <NewArrivals />
      {/* <ItemsSection 
        Products={Products}
        // isLoading={productsIsLoading}
        // refetch={refetch}
        itemsCategory="New Arrivals"
      /> */}
      <Discount />
      <CategoryCardSection />
      <JustForYou />
      
      <Gallery />
      <Support />
      <ContactUs />
    </div>
  );
};

export default Home;
