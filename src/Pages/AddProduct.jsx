import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const addMenuItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const menuItem = { name, price, category, rating, photo, description };
    console.log(menuItem);

    fetch("https://food-order-server-three.vercel.app/menuitem/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(menuItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        // alert("Item Added");
      });
  };
  return (
    <>
      <div className="lg:w-[800px] w-auto mx-2 my-10 lg:mt-28 lg:mb-36 shadow-primary-1 shadow-2xl lg:mx-auto  p-4 rounded-sm">
        <h4 className="md:text-heading-4  text-heading-5 font-bold leading-heading-4 mt-3 text-gray-1 text-center mb-8">
          <span className="text-primary-2 ">Add</span> Your Product
        </h4>
        <form onSubmit={addMenuItem} className="space-y-4">
          <div className=" text-gray-2 grid-cols-1 grid md:grid-cols-2 gap-4 ">
            <input
              className="border placeholder:text-gray-3 text-gray-2 outline-primary-2 border-gray-4 py-2 px-3 w-full"
              type="text"
              name="name"
              id="name"
              placeholder="Product Name"
            />
            <input
              className="border placeholder:text-gray-3 text-gray-2 outline-primary-2 border-gray-4 py-2 px-3 w-full"
              type="text"
              name="price"
              id="price"
              placeholder="Product Price"
            />
            <input
              className="border placeholder:text-gray-3 text-gray-2 outline-primary-2 border-gray-4 py-2 px-3 w-full"
              type="text"
              name="category"
              id="category"
              placeholder="Product Category"
            />
            <input
              className="border placeholder:text-gray-3 text-gray-2 outline-primary-2 border-gray-4 py-2 px-3 w-full"
              type="number"
              name="rating"
              id="rating"
              placeholder="Product Rating"
            />
          </div>
          <input
            className="border placeholder:text-gray-3 text-gray-2 outline-primary-2 border-gray-4 py-2 px-3 w-full"
            type="text"
            name="photo"
            id="photo"
            placeholder="Product Photo"
          />
          <textarea
            name="description"
            placeholder="Product Description"
            id="description"
            className="border outline-primary-2 placeholder:text-gray-3 text-gray-2 border-gray-4 py-2 px-3 w-full"
          ></textarea>
          <input
            type="submit"
            value="Add"
            className="bg-primary-2 font-bold text-normal cursor-pointer text-white w-full py-2 mt-8 rounded-sm"
          />
        </form>
      </div>
    </>
  );
};

export default AddProduct;
