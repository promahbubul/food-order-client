import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import BottomFooter from "../components/BottomFooter/BottomFooter";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className=" md:text-white ">
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
        <BottomFooter />
      </div>
    </div>
  );
};

export default MainLayout;
