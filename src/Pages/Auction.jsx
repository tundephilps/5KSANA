import { MdKeyboardArrowRight } from "react-icons/md";
import CardSwiper from "../components/CardSwiper";
import { FaBell } from "react-icons/fa";
import React, { useState } from "react";
import BetHistory from "../components/BetHistory";

const Auction = () => {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <div className="bg-black">
      {/* Header */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:px-[80px] px-4 py-8">
        <div className="flex items-center gap-3 text-gray-400 text-sm  ">
          <p>Home</p>
          <MdKeyboardArrowRight />
          <p>Shop</p>
          <MdKeyboardArrowRight />
          <p className="text-white">Auction</p>
        </div>
        {/* Banner */}
        <div className="w-full lg:w-[90%]  flex items-center justify-between bg-[#303030] text-white px-4 py-2  rounded-lg shadow-lg ">
          {/* Bell Icon */}
          <div className="flex items-center space-x-3">
            <FaBell className="text-gray-100" />
            <span className="text-sm">Your bid has been outbid</span>
          </div>
          {/* Close Icon */}
          <button className="text-gray-100 text-1xl hover:text-gray-200">
            &times;
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 ">
        {/* Swiper */}
        <div>
          <CardSwiper />

          <div className="lg:px-20 px-4 py-8 text-white">
            <p>Lot information:</p>
            <p className="pt-4 text-xs text-gray-400">
              Have no fear of moving into the unknown. Simply step out
              fearlessly knowing that Bitcoin is with you, therefore no harm can
              befall you; all is very, very well. Do this in complete faith and
              confidence.
            </p>
            <p className="text-xs text-gray-400 pt-2">
              -5 months of work! Only HandMade!
              <br /> -30,000 stitches! Only BitcoinArt !
            </p>
            <p className="text-xs text-gray-400 pt-2">Materials:</p>
            <p className="text-xs text-gray-400 pt-2">
              -Threads DMC” New Colors ” Embroidery Floss Pack; -DMC Gold
              Embroidery Hand Needles; -Fabric -Handmade decorative frame
            </p>

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
            </div>
          </div>
        </div>

        <div className="text-white lg:w-[80%] w-full lg:px-0 px-4 ">
          <p className=" text-3xl">PAINTING-EMBROIDERY-UNKNOWN BITCOINS</p>
          <div className="flex flex-row justify-between text-[#cfcfcf] py-4">
            <div>
              <p>Current rate</p>
              <p className="text-[#fcc800] text-2xl font-semibold">0.1000BTC</p>
            </div>
            <p>Remaining auction time: 02:40:30</p>
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium mb-2">
              Your bet
            </label>
            <input
              type="text"
              placeholder="0.1000BTC"
              className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
            />
          </div>

          <button
            type="submit"
            className="bg-[#fccb00] hover:bg-[#fccb00]/80 text-black font-medium rounded-full text-center w-full py-2.5 justify-center inline-flex items-center"
          >
            Place a bet
          </button>

          {/* Toggle */}
          <div className="flex items-center pt-8 pb-3">
            {/* Toggle Switch */}
            <button
              onClick={() => setIsToggled(!isToggled)}
              className={`w-12 h-6 flex items-center rounded-full p-1 ${
                isToggled ? "bg-yellow-500" : "bg-gray-600"
              } transition-colors duration-300`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  isToggled ? "translate-x-6" : "translate-x-0"
                } transition-transform duration-300`}
              ></div>
            </button>
            {/* Title */}
            <span className="ml-3 text-lg font-semibold">
              Increase in rate at equal rates
            </span>
          </div>

          {/* Description */}
          <p className="text-[#cfcfcf] text-sm">
            If you and another bidder have the same maximum bid, the tiebreaker
            feature will automatically add another bid increment to the bidder
            who first activated the tiebreaker feature.
          </p>

          <BetHistory />
        </div>
      </div>
    </div>
  );
};

export default Auction;
