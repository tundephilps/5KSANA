import React from "react";
import Frame from "../assets/Frame.png";

import Art from "../assets/Art.png";
import { FiShoppingBag } from "react-icons/fi";
import Bitcoin from "../assets/bitcoin.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/Cardpage"); // Navigate to the /cardpage route
  };

  return (
    <div className="bg-black relative">
      {/* Background Image */}
      <img src={Frame} className="h-screen w-full object-cover" alt="Frame" />

      <Swiper
        slidesPerView={1}
        spaceBetween={2}
        loop={true}
        className="mySwiper absolute inset-0  "
        modules={[Autoplay]}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          {/* Centered Text */}

          <div className="font-sansation pt-[10%] flex flex-col items-center justify-center">
            <h1
              className="text-white  text-5xl md:text-9xl font-bold text-center"
              data-aos="zoom-in-up"
            >
              EXPLORE THE
            </h1>

            {/* <br data-aos="fade-down" /> */}
            <p
              className="text-white text-5xl md:text-9xl font-bold text-center"
              data-aos="fade-down"
            >
              {" "}
              COLLECTION
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-4 gap-8 px-12 pt-[5%] text-white">
            {/* Card */}
            <div onClick={handleCardClick}>
              <div className="border-purple-700 border p-4 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/50 to-black">
                <div className="relative">
                  <img src={Art} alt="NFT" className="rounded-lg w-full h-64" />
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
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div
              onClick={handleCardClick}
              className="flex justify-end flex-col gap-4 "
            >
              <h3 className="text-xl font-bold uppercase pt-2">
                Painting-Embroidery-Unknown-BITCOIN
              </h3>
              <div className="flex items-center bg-white px-4 w-40 text-black p-2 rounded-full">
                <FiShoppingBag className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">ADD TO CART</span>
              </div>
            </div>
            {/* Card */}
            <div onClick={handleCardClick}>
              <div className="border-purple-700 border p-4 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/50 to-black">
                <div className="relative">
                  <img src={Art} alt="NFT" className="rounded-lg w-full h-64" />
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
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div
              onClick={handleCardClick}
              className="flex justify-end flex-col gap-4 "
            >
              <h3 className="text-xl font-bold uppercase pt-2">
                Painting-Embroidery-Unknown-BITCOIN
              </h3>
              <div className="flex items-center bg-white px-4 w-40 text-black p-2 rounded-full">
                <FiShoppingBag className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">ADD TO CART</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Explore;
