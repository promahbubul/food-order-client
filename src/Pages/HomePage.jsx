import React from "react";

import Banner from "../components/Banner/Banner";
import AboutUs from "../components/AboutUs/AboutUs";
import FoodCategory from "../components/FoodCategory/FoodCategory";
import FoodMenu from "../components/FoodMenu/FoodMenu";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const menu = useLoaderData();
  return (
    <div>
      <Banner />
      <FoodMenu menu={menu} />
      <AboutUs />
      <FoodCategory />
      {/* <HomeMenu /> */}
    </div>
  );
};

export default HomePage;
