import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const { _id, name, price, category, rating, photo, description } =
    useLoaderData();

  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const updatedFood = { name, price, category, rating, photo, description };

    fetch(`https://food-order-server-three.vercel.app/menuitem/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully!",
            text: "Food Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        // alert("Item Added");
      });
  };
  return (
    <>
      <div className="lg:w-[800px] w-auto mx-3 my-10 lg:mt-28 lg:mb-36 shadow-primary-1 shadow-2xl lg:mx-auto  p-4 rounded-sm">
        <h4 className="text-heading-5 md:text-heading-4 font-bold leading-heading-4 mt-3 text-gray-1 text-center mb-8">
          <span className="text-primary-2 ">Update</span> Your Food
        </h4>
        <form onSubmit={handleUpdateFood} className="space-y-4">
          <div className=" text-gray-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              className="border placeholder:text-gray-3 text-gray-2 outline-primary-2 border-gray-4 py-2 px-3 w-full"
              type="text"
              name="name"
              id="name"
              placeholder="Product Name"
              defaultValue={name}
            />
            <input
              className="border placeholder:text-gray-3 text-gray-2 outline-primary-2 border-gray-4 py-2 px-3 w-full"
              type="text"
              name="price"
              id="price"
              placeholder="Product Price"
              defaultValue={price}
            />
            <input
              className="border placeholder:text-gray-3 text-gray-2 outline-primary-2 border-gray-4 py-2 px-3 w-full"
              type="text"
              name="category"
              id="category"
              placeholder="Product Category"
              defaultValue={category}
            />
            <input
              className="border placeholder:text-gray-3 text-gray-2 outline-primary-2 border-gray-4 py-2 px-3 w-full"
              type="number"
              name="rating"
              id="rating"
              placeholder="Product Rating"
              defaultValue={rating}
            />
          </div>
          <input
            className="border placeholder:text-gray-3 text-gray-2 outline-primary-2 border-gray-4 py-2 px-3 w-full"
            type="text"
            name="photo"
            id="photo"
            placeholder="Product Photo"
            defaultValue={photo}
          />
          <textarea
            name="description"
            placeholder="Product Description"
            id="description"
            className="border outline-primary-2 placeholder:text-gray-3 text-gray-2 border-gray-4 py-2 px-3 w-full"
            defaultValue={description}
          ></textarea>
          <input
            type="submit"
            value="Update"
            className="bg-primary-2 font-bold text-normal cursor-pointer text-white w-full py-2 mt-8 rounded-sm"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateFood;
