import React from "react";
import singlePageBackground from "../../assets/images/singlePageBackground.png";
import { SlArrowRight } from "react-icons/sl";

const SinglePageBanner = ({ title, subtitle }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${singlePageBackground})` }}
        className="h-80 bg-auto bg-no-repeat text-white bg-bottom flex flex-col justify-center items-center font-bold"
      >
        <h2 className="text-heading-2 font-heading-2 font-bold leading-heading-2 mb-5">
          {title}
        </h2>
        <p className="flex flex-row items-center gap-2">
          Home <SlArrowRight className="text-[12px] font-extrabold gap-3" />
          <span className="text-primary-2"> {subtitle}</span>
        </p>
      </div>
    </div>
  );
};

export default SinglePageBanner;
