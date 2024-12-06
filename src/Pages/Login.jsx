import React from "react";
import { FaTimes } from "react-icons/fa";
import Blur from "../assets/Blur.png";
import { FaGoogle, FaFacebook } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="  absolute     py-4   z-50">
        <img src={Blur} className="h-full w-full fixed top-0" />
        <div className="fixed flex items-center justify-center lg:px-[20%]   top-0 left-0 bg-black/90  h-full w-full text-white rounded-2xl z-50">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-400"
            onClick={handleClose}
          >
            <FaTimes />
          </button>
          <div className="flex items-center justify-center h-full ">
            <div className="bg-[#171717] text-white p-8 rounded-lg shadow-lg lg:w-96 w-full relative">
              {/* Close button */}
              {/* <button className="absolute top-4 right-4 text-white text-xl hover:text-gray-400">
                &times;
              </button> */}

              {/* Sign In Header */}
              <h2 className="text-2xl font-bold text-center mb-6">SIGN IN</h2>

              {/* Email and Password Form */}
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium mb-2"
                  >
                    Password *
                  </label>
                  <input
                    type="text"
                    placeholder="Password"
                    className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#fcc800] text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-700" />
                <span className="mx-3 text-gray-400">Or</span>
                <hr className="flex-grow border-gray-700" />
              </div>

              {/* Social Sign-In Buttons */}
              <button className="w-full flex items-center justify-center bg-white text-black font-medium py-2 px-4 rounded-lg mb-3 hover:bg-gray-200 transition">
                <FaGoogle className="mr-2" /> Sign in with Google
              </button>
              <button className="w-full flex items-center justify-center bg-[#1877f2] text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                <FaFacebook className="mr-2" /> Sign in with Facebook
              </button>

              {/* Footer */}
              <p className="text-sm text-center mt-6">
                Don’t have an account?{" "}
                <Link
                  to="/SignUp"
                  className="text-[#fcc800] font-semibold hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
