import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import AboutUs from "../components/AboutUs/AboutUs";
import FoodCategory from "../components/FoodCategory/FoodCategory";
import HomeMenu from "../components/HomeMenu/HomeMenu";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <FoodCategory />
      <HomeMenu />
    </div>
  );
};

export default HomePage;
