import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";


const BottomFooter = () => {
  return (
    <div className="bg-primary-2 py-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-normal font-normal font-inter">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </p>
        <div className="flex flex-row gap-3">
          <div className="p-1 rounded-sm bg-white">
            <FaFacebookF className=" text-gray-2 text-lg" />
          </div>
          <div className="p-1 rounded-sm bg-white">
            <FaTwitter className=" text-gray-2 text-lg" />
          </div>
          <div className="p-1 rounded-sm bg-white">
            <FaInstagram className=" text-gray-2 text-lg" />
          </div>
          <div className="p-1 rounded-sm bg-white">
            <FaYoutube className=" text-primary-2 text-lg" />
          </div>
          <div className="p-1 rounded-sm bg-white">
            <FaPinterestP className=" text-gray-2 text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
