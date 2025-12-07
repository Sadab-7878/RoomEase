import React from "react";
import homepage from "../assets/Home.png";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router";
import { auth } from "../../firebase.init";

import { sendPasswordResetEmail } from "firebase/auth";
const PasswordRecovery = () => {
  const handlesubmit = (e) => {
    e.preventDefault();

    const emailval = e.target.email.value;

    sendPasswordResetEmail(auth, emailval)
      .then(() => {
        alert("Password Reset Email Sent");
      })
      .catch((error) => {
        const errorMessage = error.message;

        alert(errorMessage);
      });
  };
  return (
    <>
      <div>
        {/* 1 */}
        <div className="h-[100px] bg-[#99F2CE] flex items-center justify-between px-10">
          <div></div>

          <div className="ml-48">
            <div className="flex items-center gap-2">
              <IoHome size={32} />
              <p className="text-3xl font-bold">RoomEase</p>
            </div>
            <div>
              <p className="text-[#AC0404]">Online Rental & Roommate Finder</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              to={"/login"}
              className=" py-1 px-10 bg-[#007AFF] rounded-2xl"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="py-1 px-10 bg-[#007AFF] rounded-2xl"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* 2 */}
        <div className="flex items-center justify-center gap-10 ">

          
          <div className="flex flex-col gap-5 mt-10">
            <p>Forgot password?</p>

            <p>Please enter your email to reset the password</p>

            <p>Your Email</p>

            <form onSubmit={(e) => handlesubmit(e)} className="flex flex-col gap-5">
              <input
                name="email"
                type="text"
                className="border border-[#E1E1E1] w-[400px] h-[50px] rounded-2xl"
              />
              <button
                type="submit"
                className=" px-12 py-2 bg-[#648DDB] rounded-xl cursor-pointer"
              >
                Reset Password
              </button>
            </form>
          </div>
          <div className="mt-10">
            <img src={homepage} alt="homepage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRecovery;
