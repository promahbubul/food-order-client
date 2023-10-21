import React from "react";
import burget from '../assets/images/unsplash_v3OlBE6-fhU.png'

const MyCart = () => {
  return (
    <div className="mt-28 mb-36 text-gray-1">
      <table className="mx-auto  md:w-10/12 space-y-8 ">
        <tr className="flex justify-between mb-5">
          <th className="">Product</th>
          <th className="">Price</th>
          <th className="">Quantity</th>
          <th className="">Total</th>
          <th className="">Remove</th>
        </tr>
        <tr className="flex justify-between  pb-5 border-b-[1px] border-gray-4">
                  <td className="">
                      <img src="" alt="" />
          </td>
          <td className="">Price</td>
          <td className="">Quantity</td>
          <td className="">Total</td>
          <td className="">Remove</td>
        </tr>
        <tr className="flex justify-between pb-5 border-b-[1px] border-gray-4">
          <td className="">Product</td>
          <td className="">Price</td>
          <td className="">Quantity</td>
          <td className="">Total</td>
          <td className="">Remove</td>
        </tr>
      </table>
    </div>
  );
};

export default MyCart;
