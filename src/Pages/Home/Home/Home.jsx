import React from "react";
import Discount from "../../../Components/Discount";
import Advertisig from "../Advertisig/Advertisig";
import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";
import Support from "../Support/Support";

const Home = () => {
  return (
    <div className="mx-5 md:mx-14 ">
      <Banner />
      <CategorySection />
      <Advertisig />
      <Discount />
      <Support />
    </div>
  );
};

export default Home;
