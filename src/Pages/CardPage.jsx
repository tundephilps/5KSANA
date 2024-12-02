import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import CardSwiper from "../components/CardSwiper";
import { FiShoppingBag } from "react-icons/fi";

import Bitcoin from "../assets/bitcoin.png";
import RelatedProducts from "../components/RelatedProducts";
import ContactForm2 from "../components/ContactForm2";

const CardPage = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center gap-3 text-gray-400 text-sm lg:px-[80px] px-4 py-8">
        <p>Home</p>
        <MdKeyboardArrowRight />
        <p>Shop</p>
        <MdKeyboardArrowRight />
        <p className="text-white">Unknown Bitcoin</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 ">
        <CardSwiper />

        <div className="text-white lg:w-[80%] w-full px-4">
          <p className=" text-3xl">PAINTING-EMBROIDERY-UNKNOWN BITCOINS</p>
          <p className="pt-4 text-xs text-gray-400">
            Have no fear of moving into the unknown. Simply step out fearlessly
            knowing that Bitcoin is with you, therefore no harm can befall you;
            all is very, very well. Do this in complete faith and confidence.
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
            <div className="flex items-center justify-between ">
              <span className="text-gray-100 text-xs inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
                {" "}
                <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
              </span>
              <div className="flex items-center bg-white text-black p-2 rounded-full">
                <FiShoppingBag className="w-5 h-5 mr-2" />
                <span className="text-xs font-medium">ADD TO CART</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts />
      <div className="lg:px-[80px] px-4">
        <ContactForm2 />
      </div>
    </div>
  );
};

export default CardPage;
