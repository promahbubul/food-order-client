import React from "react";
import bannerImage from "../../assets/images/Image.png";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="flex flex-row  max-w-6xl  mx-auto items-center pt-14 gap-14 ">
        <div className="flex md:w-2 flex-col items-center gap-5">
          <div className="w-[2px] bg-white h-40"></div>
          <div className="flex flex-col gap-5">
            <a href="">
              <FaFacebookF className="text-small" />
            </a>{" "}
            <a href="">
              <FaTwitter className="text-small" />
            </a>{" "}
            <a href="">
              <FaPinterestP className="text-small" />
            </a>
          </div>
          <div className="w-[2px] bg-white h-40"></div>
        </div>
        <div className="md:w-5/12">
          <h4 className="font-great-vibes text-heading-4 text-primary-2 mb-2">
            Its Quick & Amusing!
          </h4>
          <h2 className="text-heading-1 font-overpress font-bold leading-heading-1 mb-8">
            <span className="text-primary-2 ">Th</span>e Art of speed<br></br>{" "}
            food Quality
          </h2>
          <p className="font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
          <button className="bg-primary-2 px-14 py-3 rounded-full mt-8">
            See Menu
          </button>
        </div>
        <div className="md:w-5/12">
          <img src={bannerImage} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Banner;
