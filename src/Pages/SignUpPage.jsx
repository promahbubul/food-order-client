import React, { useContext, useState } from "react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthContext/AuthProvider";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const [registerError, setReisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if (password.length < 6) {
      setReisterError("Password Shoud be 6 Character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setReisterError("Password Must be One UpperCase Letter");
      return;
    }
    setReisterError("");
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // new user has been created
        const createdAt = result.user?.metadata?.creationTime;
        const user = { name, email, createdAt: createdAt };
        fetch("https://food-order-server-three.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.insertedId) {
              Swal.fire({
                title: "Successfully!",
                text: "User Created Successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
            }
          });
      })
      .catch((error) => {
        console.error(error);
        setReisterError(error.message);
      });
  };
  return (
    <>
      <div className="text-black-1 md:mt-20 my-8 mx-2 md:mb-40 rounded-md md:mx-auto md:w-[400px] p-8 shadow-2xl shadow-primary-1">
        <form onSubmit={handleSignUp} action="" className="">
          <h5 className="text-heading-6 mb-8 font-heading-6 font-bold">
            Sign Up
          </h5>
          {registerError && (
            <p className="textarea-normal text-error">{registerError}</p>
          )}
          <div
            className="mt-4 relative rounded-sm items-center flex border
         border-gray-4 "
          >
            <AiOutlineUser className="absolute left-2 text-lg" />
            <input
              placeholder="Name"
              className="w-full outline-none border-none pl-10 px-4 py-2"
              type="text"
              name="name"
              required
            />
          </div>
          <div
            className="mt-4  relative rounded-sm items-center flex border
         border-gray-4 "
          >
            <AiOutlineMail className="absolute left-2 text-lg" />
            <input
              placeholder="Email"
              className="w-full outline-none border-none pl-10 px-4 py-2"
              type="Text"
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
            value="Sign Up"
            className="bg-primary-2 cursor-pointer text-white w-full py-2 mt-8 rounded-sm"
          />
          <p className="mt-4">
            I have already account{" "}
            <NavLink
              className="text-primary-2   underline font-bold "
              to="/signin"
            >
              Sign In
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
