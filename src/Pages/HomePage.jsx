import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import AboutUs from '../components/AboutUs/AboutUs'
import FoodCategory from "../components/FoodCategory/FoodCategory";
import Footer from "../components/Footer/Footer";
import BottomFooter from "../components/BottomFooter/BottomFooter";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <FoodCategory />
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default HomePage