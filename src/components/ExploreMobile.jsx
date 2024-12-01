import React from "react";
import { FaEye, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import Art from "../assets/Art.png";
import { FiShoppingBag } from "react-icons/fi";
import Bitcoin from "../assets/Bitcoin.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ExploreMobile = () => {
  return (
    <div className="bg-black text-white p-4  shadow-lg">
      <p className="text-white text-center text-[53px] leading-none font-bold py-6">
        EXPLORE THE COLLLECTION
      </p>

      <Swiper
        slidesPerView={1.1}
        spaceBetween={20}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="border-purple-700 border p-4 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/50 to-black">
              <div className="relative">
                <img src={Art} alt="NFT" className="rounded-lg w-full h-auto" />
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center pb-4">
                  <div className="text-sm text-gray-400">
                    <p>Delivery</p>
                    <p>Dimension (cm):</p>
                  </div>
                  <div className="text-end">
                    <p>International-Free</p>
                    <p>30x40</p>
                  </div>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                    {" "}
                    <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                  </span>
                  <div className="flex items-center bg-white text-black p-2 rounded-full">
                    <FiShoppingBag className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">ADD TO CART</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold uppercase pt-2">
              Painting-Embroidery-Unknown-BITCOIN
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="border-purple-700 border p-4 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/50 to-black">
              <div className="relative">
                <img src={Art} alt="NFT" className="rounded-lg w-full h-auto" />
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center pb-4">
                  <div className="text-sm text-gray-400">
                    <p>Delivery</p>
                    <p>Dimension (cm):</p>
                  </div>
                  <div className="text-end">
                    <p>International-Free</p>
                    <p>30x40</p>
                  </div>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                    {" "}
                    <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                  </span>
                  <div className="flex items-center bg-white text-black p-2 rounded-full">
                    <FiShoppingBag className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">ADD TO CART</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold uppercase pt-2">
              Painting-Embroidery-Unknown-BITCOIN
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>

      <button
        type="button"
        class="mt-8 text-white bg-transparent border-white border focus:outline-none hover:bg-yellow-500 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 lg:w-auto w-full me-2 mb-8"
      >
        VIEW MORE
      </button>
    </div>
  );
};

export default ExploreMobile;
