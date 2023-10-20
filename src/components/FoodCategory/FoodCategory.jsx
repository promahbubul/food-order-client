import React from "react";

import { FaCheck } from "react-icons/fa";

import category1 from "../../assets/images/category1.png";
import category2 from "../../assets/images/category2.png";
import category3 from "../../assets/images/category3.png";
import category4 from "../../assets/images/category4.png";

const FoodCategory = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="items-center  max-w-6xl  mx-auto pt-20 py-5 gap-14 text-center">
        <h4 className="font-great-vibes text-heading-4 text-primary-2 mb-2">
          Food Category
        </h4>
        <h2 className="text-heading-2 font-overpress font-bold leading-heading-2 mb-8">
          <span className="text-primary-2 ">Ch</span>oose Food Iteam
        </h2>
        <div className="flex flex-row w-full gap-5 justify-between">
          <div className="w-[23%] relative">
            <img src={category1} alt="" className="w-full " />
            <span className="bg-white text-primary-2 top-28 left-20 font-bold text-normal font-inter absolute py-2 px-5 inline-block text-center  rounded-md ">
              Save 30%
            </span>
            <h6 className="bg-primary-2 text-white top-40 left-0 font-bold text-heading-6 font-inter absolute py-2 px-5 inline-block text-center  rounded-md ">
              Fast Food Dish
            </h6>
          </div>
          <img src={category2} alt="" className="w-[23%]" />
          <img src={category3} alt="" className="w-[23%]" />
          <img src={category4} alt="" className="w-[23%]" />
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
