import React from "react";
import Advertisig from "../Advertisig/Advertisig";
import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";
import Support from "../Support/Support";

const Home = () => {
  return (
    <div className="mx-5 md:mx-14 ">
      <Banner></Banner>
      <CategorySection></CategorySection>
      <Advertisig></Advertisig>
      <Support></Support>
    </div>
  );
};

export default Home;
