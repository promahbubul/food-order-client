import React, { useContext, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthContext/AuthProvider";

const SignInPage = () => {
  const [loginUser, setLoginUser] = useState(null);
  const { user, singIn, signInGoole, loginInUser } = useContext(AuthContext);
  const loacation = useLocation();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setLoginUser(result.user);
        const user = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // update laset loged at in the database
        fetch("https://food-order-server-three.vercel.app/user/", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate(loacation.state ? loacation.state : "/");
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signInGoogle = () => {
    signInGoole()
      .then((result) => {
        console.log(result.user);
        // user navigate after login
        navigate(loacation.state ? loacation.state : "/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="text-black-1 md:mt-20 my-8 mx-2 md:mb-40 rounded-md md:mx-auto md:w-[400px] p-8 shadow-2xl shadow-primary-1">
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
