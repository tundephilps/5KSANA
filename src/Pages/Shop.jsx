import React, { useState } from "react";

import { FiFilter, FiShoppingBag } from "react-icons/fi"; // Icon for Filters
import { RiAuctionLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";

import Art from "../assets/Art.png";
import Bitcoin from "../assets/bitcoin.png";
import Pagination from "../components/Shop/Pagination";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate();

  const handleAuctionClick = () => {
    navigate("/Auction");
  };

  const handleCardClick = () => {
    navigate("/Cardpage"); // Navigate to the /cardpage route
  };

  const tabs = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
  ];

  return (
    <div className="bg-black lg:px-[80px] px-1">
      {/* Filters */}
      <div className="flex items-center justify-between">
        <p className="text-white text-4xl font-medium">SHOP</p>
        <div className="flex items-center gap-2  py-4">
          {/* Auction Button */}
          <button
            onClick={handleAuctionClick}
            className="flex items-center space-x-2 bg-[#fcc800] text-black text-sm font-medium px-6 py-2 rounded-2xl hover:bg-yellow-600 transition"
          >
            <RiAuctionLine className="transform -scale-x-100 text-base" />
            <span>Auction</span>
          </button>

          {/* Filters Button */}
          <button className="flex items-center space-x-2 text-sm text-white font-medium px-4 py-2 hover:text-gray-300 transition">
            <span>Filters</span>
            <GiSettingsKnobs className="text-lg transform -scale-x-100" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className=" overflow-x-scroll pb-4">
        <div className="inline-flex  lg:space-y-0  space-x-4 bg-black py-4 text-xs ">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-24 py-2 rounded-full ${
                activeTab === index
                  ? "bg-slate-600 text-black"
                  : "bg-[#191919] text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-2 cursor-pointer">
        {/* Card */}
        <div onClick={handleCardClick}>
          <div className="border-purple-700 border lg:p-4 p-2 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/20 to-black">
            <div className="relative">
              <img src={Art} alt="NFT" className="rounded-lg w-full h-auto" />
            </div>
            <div className="">
              <h3 className="lg:text-1xl text-sm font-bold uppercase py-4  text-white">
                Painting-Embroidery-Unknown-BITCOIN
              </h3>
              <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-y-0 space-y-4 justify-between ">
                <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                  {" "}
                  <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                </span>
                <div className="flex items-center bg-white text-black p-2 rounded-full">
                  <FiShoppingBag className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">ADD TO CART</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card */}
        <div onClick={handleCardClick}>
          <div className="border-purple-700 border lg:p-4 p-2 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/20 to-black">
            <div className="relative">
              <img src={Art} alt="NFT" className="rounded-lg w-full h-auto" />
            </div>
            <div className="">
              <h3 className="lg:text-1xl text-sm font-bold uppercase py-4  text-white">
                Painting-Embroidery-Unknown-BITCOIN
              </h3>
              <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-y-0 space-y-4 justify-between ">
                <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                  {" "}
                  <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                </span>
                <div className="flex items-center bg-white text-black p-2 rounded-full">
                  <FiShoppingBag className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">ADD TO CART</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Card */}
        <div onClick={handleCardClick}>
          <div className="border-purple-700 border lg:p-4 p-2 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/20 to-black">
            <div className="relative">
              <img src={Art} alt="NFT" className="rounded-lg w-full h-auto" />
            </div>
            <div className="">
              <h3 className="lg:text-1xl text-sm font-bold uppercase py-4  text-white">
                Painting-Embroidery-Unknown-BITCOIN
              </h3>
              <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-y-0 space-y-4 justify-between ">
                <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                  {" "}
                  <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                </span>
                <div className="flex items-center bg-white text-black p-2 rounded-full">
                  <FiShoppingBag className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">ADD TO CART</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Card */}
        <div onClick={handleCardClick}>
          <div className="border-purple-700 border lg:p-4 p-2 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/20 to-black">
            <div className="relative">
              <img src={Art} alt="NFT" className="rounded-lg w-full h-auto" />
            </div>
            <div className="">
              <h3 className="lg:text-1xl text-sm font-bold uppercase py-4  text-white">
                Painting-Embroidery-Unknown-BITCOIN
              </h3>
              <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-y-0 space-y-4 justify-between ">
                <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                  {" "}
                  <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                </span>
                <div className="flex items-center bg-white text-black p-2 rounded-full">
                  <FiShoppingBag className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">ADD TO CART</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Card */}
        <div onClick={handleCardClick}>
          <div className="border-purple-700 border lg:p-4 p-2 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/20 to-black">
            <div className="relative">
              <img src={Art} alt="NFT" className="rounded-lg w-full h-auto" />
            </div>
            <div className="">
              <h3 className="lg:text-1xl text-sm font-bold uppercase py-4  text-white">
                Painting-Embroidery-Unknown-BITCOIN
              </h3>
              <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-y-0 space-y-4 justify-between ">
                <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                  {" "}
                  <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                </span>
                <div className="flex items-center bg-white text-black p-2 rounded-full">
                  <FiShoppingBag className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">ADD TO CART</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Card */}
        <div onClick={handleCardClick}>
          <div className="border-purple-700 border lg:p-4 p-2 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/20 to-black">
            <div className="relative">
              <img src={Art} alt="NFT" className="rounded-lg w-full h-auto" />
            </div>
            <div className="">
              <h3 className="lg:text-1xl text-sm font-bold uppercase py-4  text-white">
                Painting-Embroidery-Unknown-BITCOIN
              </h3>
              <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-y-0 space-y-4 justify-between ">
                <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                  {" "}
                  <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                </span>
                <div className="flex items-center bg-white text-black p-2 rounded-full">
                  <FiShoppingBag className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">ADD TO CART</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Card */}
        <div onClick={handleCardClick}>
          <div className="border-purple-700 border lg:p-4 p-2 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/20 to-black">
            <div className="relative">
              <img src={Art} alt="NFT" className="rounded-lg w-full h-auto" />
            </div>
            <div className="">
              <h3 className="lg:text-1xl text-sm font-bold uppercase py-4  text-white">
                Painting-Embroidery-Unknown-BITCOIN
              </h3>
              <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-y-0 space-y-4 justify-between ">
                <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                  {" "}
                  <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                </span>
                <div className="flex items-center bg-white text-black p-2 rounded-full">
                  <FiShoppingBag className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">ADD TO CART</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Card */}
        <div onClick={handleCardClick}>
          <div className="border-purple-700 border lg:p-4 p-2 rounded-2xl gap-[16px] bg-gradient-to-b from-[#bea2ff]/20 to-black">
            <div className="relative">
              <img src={Art} alt="NFT" className="rounded-lg w-full h-auto" />
            </div>
            <div className="">
              <h3 className="lg:text-1xl text-sm font-bold uppercase py-4  text-white">
                Painting-Embroidery-Unknown-BITCOIN
              </h3>
              <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-y-0 space-y-4 justify-between ">
                <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                  {" "}
                  <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
                </span>
                <div className="flex items-center bg-white text-black p-2 rounded-full">
                  <FiShoppingBag className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">ADD TO CART</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <Pagination />
    </div>
  );
};

export default Shop;
