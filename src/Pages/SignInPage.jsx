import React, { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthContext/AuthProvider";

const SignInPage = () => {
  const { user, singIn, signInGoole } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(e.currentTarget);
    console.log(form.get("email"));
    console.log(form.get("password"));
  };

  const signInGoogle = () => {
    signInGoole()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="text-black-1 mt-20 mb-40 rounded-md mx-auto w-[400px] p-8 shadow-2xl shadow-primary-1">
        <form onSubmit={handleLogin} action="" className="">
          <h5 className="text-heading-6 mb-8 font-heading-6 font-bold">
            Sign In
          </h5>
          <div
            className="mt-4 relative rounded-sm items-center flex border
         border-gray-4 "
          >
            <AiOutlineMail className="absolute left-2 text-lg" />
            <input
              placeholder="Email"
              className="w-full outline-none border-none pl-10 px-4 py-2"
              type="email"
              name="email"
              required
              id=""
            />
          </div>
          <div
            className="mt-4 relative rounded-sm items-center flex border
         border-gray-4 "
          >
            <BiLock className="absolute left-2 text-lg" />
            <input
              placeholder="Password"
              className="w-full outline-none border-none pl-10 px-4 py-2"
              type="password"
              required
              name="password"
              id=""
            />
          </div>
          <input
            type="submit"
            value="Sign Sin"
            className="bg-primary-2 cursor-pointer text-white w-full py-2 mt-8 rounded-sm"
          />
          <p className="mt-4">
            If you have no account please{" "}
            <NavLink
              className="text-primary-2   underline font-bold "
              to="/signup"
            >
              Sign Up
            </NavLink>
          </p>
          <div className="">
            <div className="flex mt-9 items-center justify-center flex-row">
              <div className="w-36 h-[1px] bg-gray-4"></div>
              <p className="border border-gray-4 text-gray-2 p-1 inline">OR</p>
              <div className="w-36 h-[1px] bg-gray-4"></div>
            </div>
          </div>
          <div
            onClick={signInGoogle}
            className="flex   cursor-pointer flex-row items-center mt-4 border border-gray-4 py-2 px-4 rounded-sm"
          >
            <FcGoogle className="text-lg text-left" />
            <p className="text-center mx-auto text-gray-2 text-normal font-normal leading-normal">
              Sign up with Google
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInPage;
