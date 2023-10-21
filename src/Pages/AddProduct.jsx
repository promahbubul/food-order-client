import React from "react";


const AddProduct = () => {
  return (
    <>
      
      <div className="md:w-[800px] mt-28 mb-36 shadow-primary-1 shadow-2xl mx-auto  p-4 rounded-sm">
        <h4 className="text-heading-4 font-bold leading-heading-4 mt-3 text-gray-1 text-center mb-8">
          <span className="text-primary-2 ">Add</span> Your Product
        </h4>
        <form className="space-y-4">
          <div className=" text-gray-2 grid grid-cols-2 gap-4 ">
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
