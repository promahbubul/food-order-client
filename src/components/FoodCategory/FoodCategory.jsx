import React from "react";

import { FaCheck } from "react-icons/fa";

import category1 from "../../assets/images/category1.png";
import category2 from "../../assets/images/category2.png";
import category3 from "../../assets/images/category3.png";
import category4 from "../../assets/images/category4.png";

const FoodCategory = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="items-center  max-w-6xl md:px-0 px-5  mx-auto pt-20 py-5 gap-14 text-center">
        <h4 className="font-great-vibes text-heading-4 text-primary-2 mb-2">
          Food Category
        </h4>
        <h2 className="md:text-heading-2 text-heading-4 font-overpress font-bold leading-heading-2 mb-8 text-white ">
          <span className="text-primary-2 ">Ch</span>oose Food Iteam
        </h2>
        <div className="lg:flex grid grid-cols-2 lg:flex-row w-full gap-5 justify-between">
          <div className="lg:w-[23%] w-full box-border relative">
            <img src={category1} alt="" className="w-full " />
            <span className="bg-white text-primary-2 lg:top-28 lg:left-20 top-14 left-10 font-bold text-small md:text-normal font-inter absolute md:py-2 p-1 md:px-5 inline-block text-center  rounded-md ">
              Save 30%
            </span>
            <h6 className="bg-primary-2 text-white top-24 lg:top-40 left-0 font-bold text-small md:text-heading-6 font-inter absolute py-2 px-5 inline-block text-center  rounded-md ">
              Fast Food Dish
            </h6>
          </div>
          <img src={category2} alt="" className="lg:w-[23%] w-auto " />
          <img src={category3} alt="" className="lg:w-[23%]" />
          <img src={category4} alt="" className="lg:w-[23%]" />
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
