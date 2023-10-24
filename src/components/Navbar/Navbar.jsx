import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/Foodtuck.png";
import { AuthContext } from "../../AuthContext/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };
  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/my-cart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#0D0D0D]">
      <div className="text-center justify-between pt-10 max-w-6xl  mx-auto">
        <NavLink to={"/"}>
          <img className="mx-auto" src={logo} />
        </NavLink>
      </div>
      <div className="flex flex-row mt-5 bg-[#0D0D0D] max-w-6xl mx-auto text-white">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu text-black-1 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
        </div>
        <div className="w-full hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="w-full flex md:mr-0 mr-3 justify-end">
          <div className="relative items-center  flex flex-row">
            <input
              className=" md:block hidden w-[150px] bg-[#0D0D0D] border rounded-full border-primary-2 text-white px-4 py-2"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
            <CiSearch className="relative md:block hidden right-7 text-lg text-white " />
            {user ? (
              <>
                <div
                  className="mx-2 md:block hidden 
                "
                >
                  {user.email}
                </div>
                <button
                  onClick={handleLogOut}
                  className="btn text-primary-2 btn-md hover:bg-primary-2 hover:text-white border-none"
                >
                  Log Out
                </button>
              </>
            ) : (
              <NavLink to="/signin">
                <button className="btn text-primary-2 btn-md hover:bg-primary-2 hover:text-white border-none">
                  Log In
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
