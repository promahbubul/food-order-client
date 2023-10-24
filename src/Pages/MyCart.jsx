import React, { useState } from "react";
import burger from "../assets/images/burger.png";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsEyeFill, BsPencil } from "react-icons/bs";
import SinglePageBanner from "../components/SinglePageBanner/SinglePageBanner";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const MyCart = () => {
  const loadedMenu = useLoaderData();
  const [menu, setMenu] = useState(loadedMenu);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://food-order-server-three.vercel.app/menuitem/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Food has been deleted.", "success");
              const remaining = menu.filter((food) => food._id !== _id);
              setMenu(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <SinglePageBanner title={"Menu Cart"} subtitle={"Menu cart"} />
      <div className="mt-28 mb-36 text-gray-1">
        <table className="mx-auto  md:w-10/12 space-y-8 ">
          <thead className="md:block hidden">
            <tr className="flex w-full flex-row mb-5">
              <th className="w-6/12 text-left text-[18px] font-bold">
                Product
              </th>
              <th className="w-3/12 text-center  text-[18px] font-bold">
                Price
              </th>
              <th className="w-1/12 text-center text-[18px] font-bold">
                Details
              </th>
              <th className="w-1/12 text-center text-[18px] font-bold">
                Update
              </th>
              <th className="w-1/12 text-center text-[18px] font-bold">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {menu.map((food) => (
              <tr
                key={food._id}
                className="flex flex-col md:flex-row justify-between items-center  pb-5 mt-5 border-b-[1px] border-gray-4"
              >
                <td className="flex w-6/12 text-center md:flex-row flex-col  gap-4">
                  <img
                    className="md:w-20 w-full md:h-24 mx-auto "
                    src={food?.photo}
                    alt=""
                  />
                  <div className="text-left">
                    <p className="text-normal font-inter text-gray-1 font-bold text-left">
                      {food?.name}
                    </p>
                    <div className="rating rating-xs text-left">
                      <input
                        type="radio"
                        name="rating-5"
                        defaultChecked={food?.rating == 1 ? true : false}
                        className="mask mask-star-2 bg-primary-2 "
                      />
                      <input
                        type="radio"
                        defaultChecked={food?.rating == 2 ? true : false}
                        name="rating-5"
                        className="mask mask-star-2 bg-primary-2"
                      />
                      <input
                        defaultChecked={food?.rating == 3 ? true : false}
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-primary-2 "
                      />
                      <input
                        type="radio"
                        defaultChecked={food?.rating == 4 ? true : false}
                        name="rating-5"
                        className="mask mask-star-2 bg-primary-2 "
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        defaultChecked={food?.rating == 5 ? true : false}
                        className="mask mask-star-2 bg-primary-2"
                      />
                    </div>
                  </div>
                </td>
                <td className="w-3/12 text-center">${food?.price}</td>
                <div className="flex md:flex-row flex-col gap-5 md:mt-0 mt-8">
                  <td className=" w-1/12 text-center">
                    <Link to={`/food-details/${food._id}`} key={food._id}>
                      <BsEyeFill className="text-center cursor-pointer hover:text-primary-2 mx-auto text-lg" />
                    </Link>
                  </td>
                  <td className=" w-1/12 text-center font-bold text-normal text-gray-1">
                    <Link to={`/update-food/${food._id}`}>
                      <BsPencil className="text-center cursor-pointer hover:text-primary-2 mx-auto text-lg" />
                    </Link>
                  </td>
                  <td
                    onClick={() => handleDelete(food._id)}
                    className=" w-1/12 text-center"
                  >
                    <AiOutlineClose className="text-center cursor-pointer hover:text-primary-2 mx-auto text-lg" />
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCart;
