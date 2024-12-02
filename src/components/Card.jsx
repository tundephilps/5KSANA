import React from "react";

import Art from "../assets/Art.png";
import { FiShoppingBag } from "react-icons/fi";
import Bitcoin from "../assets/bitcoin.png";

const Card = () => {
  return (
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
  );
};

export default Card;
