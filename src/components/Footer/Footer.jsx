import React from "react";
import clock from "../../assets/images/clock.png";
import { Link } from "react-router-dom";
import footerItem1 from "../../assets/images/footer-item1.png";
import footerBg from "../../assets/images/footerbg.png";

const Footer = () => {
  return (
    <div className="bg-[#0D0D0D] pt-20 lg:px-0 px-5">
      <div className="py-10 mt-36l  max-w-6xl   mx-auto">
        <div className="flex md:flex-row flex-col text-center  justify-around items-center  border-primary-2 pb-14 mb-16 border-b">
          <div className="md:mb-0 mb-7">
            <h4 className="text-heading-4 font-bold leading-heading-4 mb-4 text-white">
              <span className="text-primary-2">St</span>ill You Need Our Support
              ?
            </h4>
            <p className="text-normal text-white font-inter leading-normal">
              Don’t wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="md:w-[450px] w-full  py-3 px-4 outline-none text-white placeholder:text-white rounded-sm bg-primary-2"
              id=""
            />
            <input
              className="bg-white py-3 px-4 text-primary-2 absolute right-0"
              type="submit"
              value="Subscribe Now"
            ></input>
          </div>
        </div>
        <div className="flex md:grid md:space-y-10 md:grid-cols-2 flex-col md:gap-0 lg:space-y-0 gap-8 text-white lg:flex-row justify-between ">
          <div className="space-y-6 w-full ">
            <h5 className="text-heading-5">About Us.</h5>
            <p className="w-[260px] text-left">
              orporate clients and leisure travelers has been relying on
              Groundlink for dependab safe, and professional chauffeured car
              service in major cities across World.
            </p>
            <div className="flex w-full items-center mt-6 flex-row gap-3">
              <img
                src={clock}
                alt=""
                className=" bg-primary-2 px-3 py-1 w-16 h-16 rounded-sm"
              />
              <div className="w-full">
                <p className="text-md">Opening Houres</p>
                <p className="text-small font-normal font-inter">
                  Mon - Sat(8.00 - 6.00)
                </p>
                <p className="text-small font-normal font-inter">
                  Sunday - Closed
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 w-full">
            <h5 className="text-heading-5">Useful Links</h5>
            <ul className="space-y-6">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about">News</Link>
              </li>
              <li>
                <Link to="/about">Menu</Link>
              </li>
              <li>
                <Link to="/about">Partners</Link>
              </li>
              <li>
                <Link to="/about">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6 w-full">
            <h5 className="text-heading-5">Useful Links</h5>
            <ul className="space-y-6">
              <li>
                <Link to="/about">FAQ</Link>
              </li>
              <li>
                <Link to="/about">Term & conditions</Link>
              </li>
              <li>
                <Link to="/about">Reporting</Link>
              </li>
              <li>
                <Link to="/about">Documentation</Link>
              </li>
              <li>
                <Link to="/about">Support Policy</Link>
              </li>
              <li>
                <Link to="/about">Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="w-full space-y-6">
            <h5 className="text-heading-5">Recent Post</h5>
            <div className="flex gap-2 flex-row items-center">
              <img src={footerItem1} alt="" className="w-12 " />
              <div className="">
                <p className="text-gray-3">20 Feb 2022</p>
                <p className="">Keep Your Business </p>
              </div>
            </div>
            <div className="flex gap-2 flex-row items-center">
              <img src={footerItem1} alt="" className="w-12 " />
              <div className="">
                <p className="text-gray-3">20 Feb 2022</p>
                <p className="">Keep Your Business </p>
              </div>
            </div>
            <div className="flex gap-2 flex-row items-center">
              <img src={footerItem1} alt="" className="w-12 " />
              <div className="">
                <p className="text-gray-3">20 Feb 2022</p>
                <p className="">Keep Your Business </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
