import React from "react";
import SinglePageBanner from "../components/SinglePageBanner/SinglePageBanner";
import galleryImage1 from "../assets/images/galleryImage1.png";
import galleryImage2 from "../assets/images/galleryImage2.png";
import galleryImage3 from "../assets/images/galleryImage3.png";
import galleryImage4 from "../assets/images/galleryImage4.png";
import displayImage1 from "../assets/images/displayImage1.png";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import { PiBagLight } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();

  return (
    <div className="text-black-1">
      <SinglePageBanner title={"Food Details"} subtitle={"Food Details"} />
      <div className="md:w-11/12 mx-5 md:mx-auto flex flex-col md:flex-row py-28">
        <div className="md:w-1/12  md:flex hidden md:flex-col gap-6 ">
          <img src={galleryImage1} alt="" className="rounded-md" />
          <img src={galleryImage2} alt="" className="rounded-md" />
          <img src={galleryImage3} alt="" className="rounded-md" />
          <img src={galleryImage4} alt="" className="rounded-md" />
        </div>
        <div className="md:w-5/12  my-auto md:ml-6">
          <img src={food?.photo} alt="" className="md:w-full h-[480px]" />
        </div>
        <div className="md:w-6/12  md:ml-12">
          <button
            className="bg-primary-2  py1 px-2
          rounded-lg text-white font-inter"
          >
            In stock
          </button>
          <h2 className="md:text-heading-2 text-heading-4 font-heading-2 leading-heading-4 md:leading-heading-2 text-gray-1 font-bold mt-3">
            {food?.name}
          </h2>
          <p className="font-normal text-md text-gray-2 font-inter leading-md mt-6 mb-8 border-b border-gray-5 pb-8">
            {food?.description}
          </p>
          <h4 className="font-heading-4 text-heading-5 leading-heading-4 text-gray-1 font-bold">
            {food?.price}${" "}
          </h4>
          <div className="rating rating-sm  mt-6">
            <input
              type="radio"
              name="rating-6"
              defaultChecked={food?.rating == 1 ? true : false}
              className="mask mask-star-2  bg-primary-2"
            />
            <input
              type="radio"
              name="rating-6"
              defaultChecked={food?.rating == 2 ? true : false}
              className="mask mask-star-2 bg-primary-2"
            />
            <input
              type="radio"
              name="rating-6"
              defaultChecked={food?.rating == 3 ? true : false}
              className="mask mask-star-2 bg-primary-2"
            />
            <input
              type="radio"
              name="rating-6"
              defaultChecked={food?.rating == 4 ? true : false}
              className="mask mask-star-2 bg-primary-2"
            />
            <input
              type="radio"
              name="rating-6"
              defaultChecked={food?.rating == 5 ? true : false}
              className="mask mask-star-2 checked:bg-primary-2 bg-primary-2"
            />
          </div>
          <Link to="/my-cart">
            <PrimaryButton text={"Add to cart"} icon={PiBagLight()} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
