import React from "react";

import Banner from "../components/Banner/Banner";
import AboutUs from "../components/AboutUs/AboutUs";
import FoodCategory from "../components/FoodCategory/FoodCategory";
import FoodMenu from "../components/FoodMenu/FoodMenu";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <FoodCategory />
      <FoodMenu />
      {/* <HomeMenu /> */}
    </div>
  );
};

export default HomePage;
