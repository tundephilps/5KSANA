import React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";
import Art2 from "../assets/Art.png";

import Art from "../assets/Art.png";
import { FiShoppingBag } from "react-icons/fi";
import Bitcoin from "../assets/bitcoin.png";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ toggleModal }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/Payment"); // Navigate to the /cardpage route
  };

  return (
    <div className=" top-[-10%] absolute     py-4   z-50">
      <div className="fixed lg:px-[25%] px-2 top-0 left-0 items-center justify-center flex bg-black/30 p-8 min-h-[100vh] w-full text-white z-50 backdrop-blur-md rounded border border-white/20 shadow-lg">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-400"
          onClick={toggleModal}
        >
          <FaTimes />
        </button>

        {/* Cart Items */}
        <div className="bg-[#29282a]/70 lg:p-8 p-2 h-full lg:w-full w-full  text-white rounded-2xl ">
          <div className="flex items-start justify-between">
            <p className="text-2xl font-bold px-4">CART</p>
          </div>

          <div className=" h-[460px] overscroll-y-auto overflow-y-auto w-full">
            {/* Card */}
            <div className=" grid lg:grid-cols-3 grid-cols-1 pt-6 gap-6 w-full px-4">
              <img
                src={Art2}
                className="h-[160px] w-full lg:col-span-1 col-span-3 rounded-md"
              />
              <div className="lg:col-span-2 col-span-3">
                <div className="flex flex-row items-baseline justify-between ">
                  <p className="text-1xl">
                    PAINTING-EMBRODIERY-UNKWOWN BITCOIN-
                  </p>
                  <HiTrash />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-sm text-gray-100">
                      <p>Delivery</p>
                      <p>Dimension (cm):</p>
                    </div>
                    <div className="text-end">
                      <p>International-Free</p>
                      <p>30x40</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between  ">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <div className="border text-1xl border-white hover:bg-white/50 h-9 w-9 flex justify-center items-center rounded-full">
                        <FaMinus />
                      </div>
                      <div className="border border-white h-9 w-16 flex justify-center items-center rounded-full">
                        1
                      </div>
                      <div className="border text-1xl border-white hover:bg-white/50 h-9 w-9 flex justify-center items-center rounded-full">
                        <FaPlus />
                      </div>
                    </div>
                    <span className="text-gray-100 text-sm inline-flex gap-2 items-center  px-2 py-1 rounded-full">
                      {" "}
                      <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className=" grid lg:grid-cols-3 grid-cols-1 pt-6 gap-6 w-full px-4">
              <img
                src={Art2}
                className="h-[160px] w-full lg:col-span-1 col-span-3 rounded-md"
              />
              <div className="lg:col-span-2 col-span-3">
                <div className="flex flex-row justify-between items-baseline">
                  <p className="text-1xl">
                    PAINTING-EMBRODIERY-UNKWOWN BITCOIN-
                  </p>
                  <HiTrash />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-sm text-gray-100">
                      <p>Delivery</p>
                      <p>Dimension (cm):</p>
                    </div>
                    <div className="text-end">
                      <p>International-Free</p>
                      <p>30x40</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between  ">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <div className="border text-1xl border-white hover:bg-white/50 h-9 w-9 flex justify-center items-center rounded-full">
                        <FaMinus />
                      </div>
                      <div className="border border-white h-9 w-16 flex justify-center items-center rounded-full">
                        1
                      </div>
                      <div className="border text-1xl border-white hover:bg-white/50 h-9 w-9 flex justify-center items-center rounded-full">
                        <FaPlus />
                      </div>
                    </div>
                    <span className="text-gray-100 text-sm inline-flex gap-2 items-center  px-2 py-1 rounded-full">
                      {" "}
                      <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-6" />
            <div className="flex flex-row items-center justify-end gap-6 lg:px-6 px-2">
              <p>Total: </p>
              <span className="text-gray-100 lg:text-sm text-xs inline-flex gap-2 items-center bg-slate-700 px-3 py-1 rounded-full">
                {" "}
                <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
              </span>

              <div
                onClick={() => {
                  toggleModal(); // Close the modal
                  navigate("/Payment"); // Navigate to the payment page
                }}
                className="w-[100px] bg-[#FCCB00] text-sm py-1.5 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-yellow-200 before:to-[rgb(149,136,27)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
              >
                Pay
              </div>
            </div>

            <div className="h-20 lg:h-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
