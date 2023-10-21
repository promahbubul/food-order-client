import React from "react";
import SinglePageBanner from "../components/SinglePageBanner/SinglePageBanner";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <div className="text-white">
      <Navbar />
      <SinglePageBanner title={"404 Error"} subtitle={"404"} />
      <div className="my-28 text-black-1 flex flex-col items-center justify-center leading-[104px] font-bold font-overpass ">
        <h1 className="text-[96px]  text-primary-2">404</h1>
        <h4 className="text-heading-4 mb-6 mt-8 font-heading-4 text-gray-1 font-bold leading-heading-4">
          Oops! Look likes something going wrong
        </h4>
        <p className="text-gray-2 text-md font-normal leading-md md:max-w-md text-center">
          Page Cannot be found! we’ll have it figured out in no time. Menwhile,
          cheek out these fresh ideas:
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
