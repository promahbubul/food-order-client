import React from "react";
import food1 from "../../assets/images/food.png";

const FoodMenuCard = ({ food }) => {
  const { name, price, photo } = food;
  return (
    <div
      className="cursor-pointer h-[350px] flex justify-between flex-col bg-white
     p-4 rounded-sm"
    >
      <img src={photo} alt="" className="w-full h-[200px] mb-3" />
      <div className="">
        <p className="text-gray-1 font-bold font-inter  text-md leading-md">
          {name}
        </p>
        <p className="text-primary-2  font-normal text-normal font-inter leading-normal">
          $ {price}
        </p>
      </div>
    </div>
  );
};

export default FoodMenuCard;
