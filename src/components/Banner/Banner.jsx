import React from "react";
import bannerImage from "../../assets/images/Image.png";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="flex  flex-col-reverse text-center md:flex-row  max-w-6xl  mx-auto items-center pt-14 md:gap-5 justify-center lg:gap-14 ">
        <div className="flex md:w-2 flex-col items-center gap-5">
          <div className="md:w-[2px] w-[250px] bg-white md:h-40 h-[2px]"></div>
          <div className="flex md:flex-col flex-row gap-5">
            <a href="">
              <FaFacebookF
                className="md:text-small text-[30px] text-white
                "
              />
            </a>{" "}
            <a href="">
              <FaTwitter
                className="md:text-small text-[30px] text-white
                "
              />
            </a>{" "}
            <a href="">
              <FaPinterestP
                className="md:text-small text-[30px] text-white
                "
              />
            </a>
          </div>
          <div className="md:w-[2px] w-[250px] bg-white md:h-40 h-[2px]"></div>
        </div>
        <div className="md:w-5/12">
          <h4 className="font-great-vibes text-heading-4 text-primary-2 mb-2">
            Its Quick & Amusing!
          </h4>
          <h2 className="md:text-heading-1 text-heading-4 text-white font-overpress font-bold leading-heading-1 mb-8">
            <span className="text-primary-2 ">Th</span>e Art of speed<br></br>{" "}
            food Quality
          </h2>
          <p className="font-inter text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
          <button className="bg-primary-2 px-14 py-3 rounded-full mt-8 text-white text-md">
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
