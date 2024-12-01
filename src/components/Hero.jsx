import React from "react";

import { FaArrowDown } from "react-icons/fa";
import Circular from "./Circular";

const Hero = () => {
  return (
    <div className="relative lg:h-screen h-full bg-black ">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute lg:top-1/2 top-[30%] lg:right-[-10%] right-[-10%] transform -translate-x-1/2 -translate-y-1/2 lg:w-[460px] lg:h-[460px] h-64 w-64 bg-gradient-to-r from-[#ffbc00] to-[#ff6b00] rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>
      <section class=" lg:px-[80px] px-4 flex flex-col-reverse justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <div class="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <h1 class="mb-8 z-50 text-7xl font-bold text-white sm:text-5xl md:mb-2 md:text-[96px]">
            5KSANA
          </h1>

          <p class="mb-8 z-50  text-white md:mb-6 lg:w-4/5 xl:text-[32px]">
            BITCOIN ARTIST & <br className="hidden lg:block" />
            FASHION DESIGNER
          </p>

          <button
            type="button"
            class="z-50 text-white bg-transparent border-white border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 lg:w-auto w-full me-2 mb-8"
          >
            BROWSE GALLERY
          </button>
          <Circular />
        </div>

        <div class="lg:h-48 lg:hidden block  rounded-lg shadow-lg h-[500px] xl:w-5/12"></div>
      </section>
    </div>
  );
};

export default Hero;
