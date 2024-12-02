import React from "react";

import { FiShoppingBag } from "react-icons/fi"; // Icon for Filters

import Art from "../assets/Art.png";
import Bitcoin from "../assets/bitcoin.png";

const RelatedProducts = () => {
  return (
    <div className="lg:px-[80px] px-4 py-12">
      <p className="text-white text-4xl font-medium">RELATED PRODUCTS</p>
      <div className="grid lg:grid-cols-4 grid-cols-2 py-6 lg:gap-6 gap-2">
        {/* Card */}
        <div>
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
        <div>
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
        <div>
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
        <div>
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
    </div>
  );
};

export default RelatedProducts;
