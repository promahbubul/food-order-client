import React from "react";
import FoodMenuCard from "../FoodMenuCard/FoodMenuCard";

const FoodMenu = () => {
  return (
    <div className="py-28 bg-[#0D0D0D]">
      <h4 className="font-great-vibes text-heading-4 text-primary-2 mb-2 text-center">
        Food Menu
      </h4>
      <h2 className="text-heading-2 text-center font-overpress font-bold leading-heading-2 mb-8">
        <span className="text-primary-2 ">Fo</span>od All Here
      </h2>
      <div className="md:w-11/12 gap-5 grid grid-cols-4 mx-auto ">
        <FoodMenuCard />
        <FoodMenuCard />
        <FoodMenuCard />
        <FoodMenuCard />
      </div>
    </div>
  );
};

export default FoodMenu;
