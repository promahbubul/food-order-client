import React from "react";
import { FaCheck } from "react-icons/fa";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";

const AboutUs = () => {
  return (
    <div className="flex flex-row items-center mt-36 gap-14 ">
      <div className="flex md:w-2 flex-col items-center gap-5"></div>
      <div className="md:w-5/12">
        <h4 className="font-great-vibes text-heading-4 text-primary-2 mb-2">
          About Us
        </h4>
        <h2 className="text-heading-2 font-overpress font-bold leading-heading-2 mb-8">
          <span className="text-primary-2 ">We </span>Create the best<br></br>{" "}
          Foody Product
        </h2>
        <p className="font-inter text-normal font-normal leading-normal mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="">
          <ul className="space-y-4">
            <li className="flex flex-row items-center gap-3">
              <FaCheck />
              <p> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </li>
            <li className="flex flex-row items-center gap-3">
              <FaCheck />
              <p>
                {" "}
                Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
              </p>
            </li>
            <li className="flex flex-row items-center gap-3">
              <FaCheck />
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </li>
          </ul>
        </div>
        <button className="bg-primary-2 px-14 py-3 rounded-full mt-8">
          See Menu
        </button>
      </div>
      <div className="md:w-5/12 flex flex-col gap-4 box-border">
        <div className="w-full">
          <img className="w-full" src={about1} alt="" />
        </div>
        <div className="flex flex-row w-full justify-between ">
          <img className="w-[48%]" src={about2} alt="" />
          <img className="w-[48%]" src={about3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
