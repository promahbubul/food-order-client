import React from "react";
import FoodMenuCard from "../FoodMenuCard/FoodMenuCard";
import { NavLink } from "react-router-dom";

const FoodMenu = ({ menu }) => {
  console.log(menu);
  return (
    <div className="md:py-28 py-24 bg-[#0D0D0D]">
      <h4 className="font-great-vibes text-heading-4 text-primary-2 mb-2 text-center">
        Food Menu
      </h4>
      <h2 className="md:text-heading-2 text-heading-3 text-center text-white font-overpress font-bold leading-heading-2 mb-8">
        <span className="text-primary-2 ">Fo</span>od All Here
      </h2>
      <div className="md:w-11/12 md:p-0 p-5  gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mx-auto ">
        {menu.map((food) => (
          <NavLink to={`/food-details/${food._id}`} key={food._id}>
            <FoodMenuCard food={food} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
