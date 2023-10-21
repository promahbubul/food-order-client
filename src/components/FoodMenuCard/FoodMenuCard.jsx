import React from "react";
import food from "../../assets/images/food.png";

const FoodMenuCard = () => {
  return (
    <div className="cursor-pointer bg-gray-5 p-3 rounded-sm">
      <img src={food} alt="" className="" />
      <p className="text-gray-1 font-bold font-inter  text-md leading-md">
        Chocolate Muffin
      </p>
      <p className="text-primary-2  font-normal text-normal font-inter leading-normal">
        $28.00
      </p>
    </div>
  );
};

export default FoodMenuCard;
