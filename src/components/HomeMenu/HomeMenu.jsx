import React from "react";

import { FaCheck } from "react-icons/fa";

import category1 from "../../assets/images/category1.png";
import category2 from "../../assets/images/category2.png";
import category3 from "../../assets/images/category3.png";
import category4 from "../../assets/images/category4.png";
import MenuCard from "../MenuCard/MenuCard";

const HomeMenu = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="items-center  max-w-6xl  mx-auto pt-20 py-5 gap-14 text-center">
        <h4 className="font-great-vibes text-heading-4 text-primary-2 mb-2">
          Choose & pick
        </h4>
        <h2 className="md:text-heading-2 text-heading-4 font-overpress font-bold leading-heading-2 mb-8 text-white ">
          <span className="text-primary-2 ">Fr</span>om Our Menu
        </h2>

        <div className="flex flex-row justify-between">
          <MenuCard />
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
