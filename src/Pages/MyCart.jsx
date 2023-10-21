import React from "react";
import burger from "../assets/images/burger.png";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import SinglePageBanner from "../components/SinglePageBanner/SinglePageBanner";
const MyCart = () => {
  return (
    <>
      <SinglePageBanner title={"Menu Cart"} subtitle={"Menu cart"} />
      <div className="mt-28 mb-36 text-gray-1">
        <table className="mx-auto  md:w-10/12 space-y-8 ">
          <tr className="flex flex-row mb-5">
            <th className="w-full text-left text-[18px] font-bold">Product</th>
            <th className="w-full text-center text-[18px] font-bold">Price</th>
            <th className="w-full text-center text-[18px] font-bold">
              Quantity
            </th>
            <th className="w-full text-center text-[18px] font-bold">Total</th>
            <th className="w-full text-center text-[18px] font-bold">Remove</th>
          </tr>
          <tr className="flex justify-between items-center  pb-5 border-b-[1px] border-gray-4">
            <td className="flex w-full text-center flex-row gap-4">
              <img className="w-20 h-24" src={burger} alt="" />
              <div className="">
                <p className="text-normal font-inter text-gray-1 font-bold t">
                  Burger
                </p>
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-primary-2"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-primary-2"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-primary-2 checked"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-primary-2"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-primary-2"
                  />
                </div>
              </div>
            </td>
            <td className="w-full text-center">$35.00</td>
            <td className=" w-full text-center">
              <div className="border rounded-full w-28 border-gray-4 mx-auto flex flex-row justify-between px-2 items-center">
                <AiOutlineMinus className="text-gray-4 text-lg" />
                <input
                  type="number"
                  className="w-full py-1  border-none outline-none text-center"
                  name="quantity"
                  id=""
                />
                <AiOutlinePlus className="text-black text-lg" />
              </div>
            </td>
            <td className=" w-full text-center font-bold text-normal text-gray-1">
              $221.00
            </td>
            <td className=" w-full text-center">
              <AiOutlineClose className="text-center cursor-pointer hover:text-primary-2 mx-auto text-lg" />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default MyCart;
